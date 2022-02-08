import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Status } from 'src/global/enum/status';
import { FilterInput } from './dto/filter.input';
export declare class OrdersResolver {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(createOrderInput: CreateOrderInput): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    primaryOrders(): Promise<Order[]>;
    findOneByPrimaryId(id: number): Promise<Order[]>;
    filterOrder(filterInput: FilterInput): Promise<Order[]>;
    findOrderByStatus(status: Status): Promise<Order[]>;
    removeOrder(id: number): Promise<import("typeorm").DeleteResult>;
    updateOrder(updateOrderInput: UpdateOrderInput): Promise<Order>;
}
