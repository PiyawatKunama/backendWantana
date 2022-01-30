import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
export declare class OrdersResolver {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(createOrderInput: CreateOrderInput): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    findOneByPrimaryId(id: number): Promise<Order[]>;
    removeOrder(id: number): Promise<import("typeorm").DeleteResult>;
    updateOrder(updateOrderInput: UpdateOrderInput): Promise<Order>;
}
