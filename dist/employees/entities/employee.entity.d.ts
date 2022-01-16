import { Order } from 'src/orders/entities/order.entity';
import { Role } from '../enums/role';
export declare class Employee {
    id: number;
    key?: string;
    idCard: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: Role;
    orders: Order[];
}
