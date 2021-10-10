import { CreateEmployeeInput } from './create-employee.input';
import { Role } from '../enums/role';
declare const UpdateEmployeeInput_base: import('@nestjs/common').Type<
    Partial<CreateEmployeeInput>
>;
export declare class UpdateEmployeeInput extends UpdateEmployeeInput_base {
    id: number;
    idCard: number;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: number;
    email: string;
    password: string;
    role: Role;
}
export {};