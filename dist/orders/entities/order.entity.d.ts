import { Clothe } from 'src/clothes/entities/clothe.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Status } from 'src/global/enum/status';
export declare class Order {
    id: number;
    key?: string;
    primaryOrderId: number;
    status: Status;
    isOutProcess: boolean;
    numClothe: number;
    created_at: Date;
    updated_at: Date;
    clothes: Clothe[];
    employee: Employee;
    customer: Customer;
    beforeInsertActions(): void;
}
