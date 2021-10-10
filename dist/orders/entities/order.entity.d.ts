import { Clothe } from 'src/clothes/entities/clothe.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
export declare class Order {
    id: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    clothes: Clothe[];
    employee: Employee;
    customer: Customer;
    beforeInsertActions(): void;
}
