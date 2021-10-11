import { Order } from 'src/orders/entities/order.entity';
export declare class Customer {
    id: number;
    idCard: number;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number;
    lineId: string;
    lineUserId: string;
    email: string;
    password: string;
    orders: Order[];
}
