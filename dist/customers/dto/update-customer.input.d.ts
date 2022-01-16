import { CreateCustomerInput } from './create-customer.input';
declare const UpdateCustomerInput_base: import("@nestjs/common").Type<Partial<CreateCustomerInput>>;
export declare class UpdateCustomerInput extends UpdateCustomerInput_base {
    id: number;
    idCard: string;
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    email: string;
    lineUserId: string;
}
export {};
