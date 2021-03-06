import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClothesService } from 'src/clothes/clothes.service';
import { CustomersService } from 'src/customers/customers.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Status } from 'src/global/enum/status';
import { generateId, generateKey } from 'src/global/generateKey';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { FilterInput } from './dto/filter.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';
import { Relations } from './relations';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
        private employeesService: EmployeesService,
        private customersService: CustomersService,
        @Inject(forwardRef(() => ClothesService))
        private clothesService: ClothesService,
    ) {}

    async create(createOrderInput: CreateOrderInput): Promise<Order> {
        const newOrder = this.ordersRepository.create(createOrderInput);

        const customer = await this.customersService.findOne(
            createOrderInput.customerId,
        );

        newOrder.customer = customer;

        const employee = await this.employeesService.findOne(
            createOrderInput.employeeId,
        );

        newOrder.employee = employee;

        const lastRecord: any = await this.ordersRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        if (createOrderInput.primaryOrderId) {
            if (lastRecord[0]) {
                const primaryOrder = await this.ordersRepository.find({
                    where: {
                        primaryOrderId: createOrderInput.primaryOrderId,
                    },
                    order: { id: 'DESC' },
                    take: 1,
                });
                lastRecord[0].key = primaryOrder[0].key;
                newOrder.primaryOrderId = createOrderInput.primaryOrderId;
            }
        } else {
            lastRecord[0]
                ? (newOrder.primaryOrderId = lastRecord[0].id + 1)
                : (newOrder.primaryOrderId = 1);

            const lastOderByKey = await this.ordersRepository.find({
                order: { key: 'DESC' },
                take: 1,
            });

            if (lastOderByKey.length) {
                lastRecord[0].key = lastOderByKey[0].key;
            }
        }

        if (lastRecord.length) {
            lastRecord[0].primaryOrderId = createOrderInput.primaryOrderId;
        }
        newOrder.id = generateId(lastRecord);

        if (createOrderInput.primaryOrderId) {
            lastRecord[0].id = lastRecord[0].primaryOrderId - 1;
        }

        newOrder.key = generateKey(lastRecord, 'OD');

        return await this.ordersRepository.save(newOrder);
    }

    async findAll(): Promise<Order[]> {
        return await this.ordersRepository.find(Relations);
    }

    async findAllPrimaryOrder(): Promise<Order[]> {
        const orders = await this.ordersRepository.find(Relations);
        const numClothes = [];

        orders.forEach((order) => {
            if (order.status === Status.IN) {
                const num = order.clothes.length;

                let primaryOrder: any;
                for (let i = 0; i < numClothes.length; i++) {
                    if (numClothes[i].orderPrimary === order.primaryOrderId) {
                        primaryOrder = {
                            ...numClothes[i],
                            num: numClothes[i].num + num,
                        };
                        numClothes[i] = primaryOrder;

                        break;
                    }
                }
                if (!primaryOrder) {
                    primaryOrder = { orderPrimary: +order.primaryOrderId, num };
                    numClothes.push(primaryOrder);
                }
            }
        });

        const primaryOrder = orders.filter((order) => {
            if (order.primaryOrderId === order.id) {
                let eachNumClothe = 0;
                numClothes.forEach((numClothe) => {
                    if (numClothe.orderPrimary === order.primaryOrderId) {
                        eachNumClothe = numClothe.num;
                    }
                });
                order.numClothe = eachNumClothe;
                return order;
            }
        });

        return primaryOrder;
    }

    async findByStatus(status: Status) {
        return await this.ordersRepository.find({
            ...Relations,
            where: { status },
        });
    }
    async filter(filterOrderInput: FilterInput) {
        const {
            typeName,
            sortName,
            spacialName,
            haveProblems,
            customerName,
            isProcess,
            status,
            firstDate,
            lastDate,
        } = filterOrderInput;

        const ordersQuery = this.ordersRepository
            .createQueryBuilder('orders')
            .leftJoinAndSelect('orders.customer', 'customer');
        let clothes: any = [];
        if (filterOrderInput) {
            if (customerName) {
                ordersQuery.andWhere('customer.firstName = :firstName', {
                    firstName: customerName,
                });
            }

            if (isProcess === true || isProcess === false) {
                ordersQuery.andWhere('orders.isOutProcess = :isOutProcess', {
                    isOutProcess: !isProcess,
                });
            }

            if (Status[status]) {
                ordersQuery.andWhere('orders.status = :status', {
                    status,
                });
            }

            if (firstDate) {
                ordersQuery.andWhere('orders.created_at < :start_at', {
                    start_at: firstDate,
                });
            }
            if (lastDate) {
                ordersQuery.andWhere('orders.created_at >= :end_at', {
                    end_at: lastDate,
                });
            }

            if (
                typeName ||
                sortName ||
                spacialName ||
                haveProblems === true ||
                haveProblems === false
            ) {
                let filterClothes = {};
                if (typeName) {
                    filterClothes = { ...filterClothes, typeName };
                }
                if (sortName) {
                    filterClothes = { ...filterClothes, sortName };
                }
                if (spacialName) {
                    filterClothes = { ...filterClothes, spacialName };
                }
                if (haveProblems === true || haveProblems === false) {
                    filterClothes = { ...filterClothes, haveProblems };
                }
                clothes = await this.clothesService.filter(filterClothes);
            } else {
                ordersQuery
                    .leftJoinAndSelect('orders.clothes', 'clothes')
                    .leftJoinAndSelect('clothes.typeClothe', 'typeClothe')
                    .leftJoinAndSelect('clothes.sortClothe', 'sortClothe')
                    .leftJoinAndSelect('clothes.specialClothe', 'specialClothe')
                    .leftJoinAndSelect(
                        'clothes.clotheHasProblems',
                        'clotheHasProblems',
                    )
                    .leftJoinAndSelect(
                        'clotheHasProblems.problemClothe',
                        'problemClothe',
                    );
            }
        }

        const filterOrders = await ordersQuery.getMany();

        if (
            typeName ||
            sortName ||
            spacialName ||
            haveProblems === true ||
            haveProblems === false
        ) {
            let orderId = 0;
            const newCloths = [];
            for (let i = 0; i < clothes.length; i++) {
                if (clothes[i].order.id !== orderId) {
                    newCloths.push(clothes[i]);
                    if (orderId) {
                        for (let j = 0; j < filterOrders.length; j++) {
                            if (filterOrders[j].id === orderId) {
                                filterOrders[j].clothes = newCloths;
                                break;
                            }
                        }
                    }
                    orderId = clothes[i].order.id;
                } else {
                    newCloths.push(clothes[i]);
                    if (i === clothes.length - 1) {
                        for (let j = 0; j < filterOrders.length; j++) {
                            if (filterOrders[j].id === orderId) {
                                filterOrders[j].clothes = newCloths;
                                break;
                            }
                        }
                    }
                }
            }
        }
        for (let j = 0; j < filterOrders.length; j++) {
            if (!filterOrders[j].clothes) {
                filterOrders[j].clothes = [];
            }
        }

        return filterOrders;
    }

    async findOneByPrimaryId(id: number): Promise<Order[]> {
        return await this.ordersRepository.find({
            ...Relations,
            where: { primaryOrderId: id },
        });
    }

    async findOne(id: number): Promise<Order> {
        return await this.ordersRepository.findOneOrFail(id, Relations);
    }

    async remove(id: number) {
        return await this.ordersRepository.delete(id);
    }

    async update(id: number, updateOrderInput: UpdateOrderInput) {
        const updateOrder = this.ordersRepository.create(updateOrderInput);
        await this.ordersRepository.update(id, updateOrder);
    }
}
