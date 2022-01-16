import { Order } from 'src/orders/entities/order.entity';
export declare class Customer {
    id: number;
    idCard: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    lineUserId: string;
    email: string;
    orders: Order[];
}
