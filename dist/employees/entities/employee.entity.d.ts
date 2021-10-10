import { Order } from 'src/orders/entities/order.entity';
import { Role } from '../enums/role';
export declare class Employee {
    id: number;
    idCard: number;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number;
    email: string;
    password: string;
    role: Role;
    orders: Order[];
}
