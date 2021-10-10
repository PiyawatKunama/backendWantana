import { Status } from '../enums/status';
export declare class CreateOrderInput {
    id: number;
    role: Status;
    clotheIds: number[];
    employeeId: number;
    customerId: number;
}
