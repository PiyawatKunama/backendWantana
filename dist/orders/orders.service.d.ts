import { ClothesService } from 'src/clothes/clothes.service';
import { CustomersService } from 'src/customers/customers.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Repository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';
export declare class OrdersService {
    private ordersRepository;
    private clothesService;
    private employeesService;
    private customersService;
    constructor(
        ordersRepository: Repository<Order>,
        clothesService: ClothesService,
        employeesService: EmployeesService,
        customersService: CustomersService,
    );
    create(createOrderInput: CreateOrderInput): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderInput: UpdateOrderInput): string;
    remove(id: number): string;
}
