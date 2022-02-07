import { CustomersService } from 'src/customers/customers.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Status } from 'src/global/enum/status';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';
export declare class OrdersService {
    private ordersRepository;
    private employeesService;
    private customersService;
    constructor(ordersRepository: Repository<Order>, employeesService: EmployeesService, customersService: CustomersService);
    create(createOrderInput: CreateOrderInput): Promise<Order>;
    findAll(): Promise<Order[]>;
    findAllPrimaryOrder(): Promise<Order[]>;
    findByStatus(status: Status): Promise<Order[]>;
    findOneByPrimaryId(id: number): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    update(id: number, updateOrderInput: UpdateOrderInput): Promise<void>;
}
