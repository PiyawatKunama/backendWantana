import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClothesService } from 'src/clothes/clothes.service';
import { CustomersService } from 'src/customers/customers.service';
import { EmployeesService } from 'src/employees/employees.service';
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
        private clothesService: ClothesService,
        private employeesService: EmployeesService,
        private customersService: CustomersService,
    ) {}

    async create(createOrderInput: CreateOrderInput): Promise<Order> {
        const newOrder = this.ordersRepository.create(createOrderInput);

        if (createOrderInput.clotheIds) {
            const clothe_types = await Promise.all(
                createOrderInput.clotheIds.map(async (order_typeId) => {
                    return await this.clothesService.findOne(order_typeId);
                }),
            );
            newOrder.clothes = clothe_types;
        }

        const customer_type = await this.customersService.findOne(
            createOrderInput.customerId,
        );

        newOrder.customer = customer_type;

        const employee_type = await this.employeesService.findOne(
            createOrderInput.employeeId,
        );

        newOrder.employee = employee_type;

        return await this.ordersRepository.save(newOrder);
    }

    async findAll(): Promise<Order[]> {
        return await this.ordersRepository.find(Relations);
    }

    async findOne(id: number): Promise<Order> {
        return await this.ordersRepository.findOneOrFail(id, Relations);
    }

    update(id: number, updateOrderInput: UpdateOrderInput) {
        return `This action updates a #${id} order`;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
