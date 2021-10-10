import { Role } from '../enums/role';
export declare class CreateEmployeeInput {
    idCard: number;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number;
    email: string;
    password: string;
    role: Role;
}
