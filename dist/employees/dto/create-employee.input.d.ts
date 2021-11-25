import { Role } from '../enums/role';
export declare class CreateEmployeeInput {
    idCard: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: Role;
}
