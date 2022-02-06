import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomersService } from 'src/customers/customers.service';
import { EmployeesService } from 'src/employees/employees.service';
import generateKey from 'src/global/generateKey';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
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

        const lastRecord = await this.ordersRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        if (createOrderInput.primaryOrderId) {
            if (lastRecord[0]) {
                await this.ordersRepository.find({
                    where: {
                        primaryOrderId: createOrderInput.primaryOrderId,
                    },
                    order: { id: 'DESC' },
                    take: 1,
                });

                newOrder.primaryOrderId = createOrderInput.primaryOrderId;
            }
        } else {
            lastRecord[0]
                ? (newOrder.primaryOrderId = lastRecord[0].id + 1)
                : (newOrder.primaryOrderId = 1);
        }

        newOrder.key = generateKey(lastRecord, 'OD');

        return await this.ordersRepository.save(newOrder);
    }

    async findAll(): Promise<Order[]> {
        return await this.ordersRepository.find(Relations);
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
