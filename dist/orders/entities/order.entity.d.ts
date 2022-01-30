import { Clothe } from 'src/clothes/entities/clothe.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Status } from 'src/global/enum/status';
export declare class Order {
    id: number;
    key?: string;
    primaryOrderId: number;
    orderIndex: number;
    status: Status;
    isOutProcess: boolean;
    created_at: Date;
    updated_at: Date;
    clothes: Clothe[];
    employee: Employee;
    customer: Customer;
    beforeInsertActions(): void;
}
