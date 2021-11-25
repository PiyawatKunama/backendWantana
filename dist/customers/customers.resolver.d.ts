import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
export declare class CustomersResolver {
    private readonly customersService;
    constructor(customersService: CustomersService);
    createCustomer(createCustomerInput: CreateCustomerInput): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    updateCustomer(updateCustomerInput: UpdateCustomerInput): Promise<Customer>;
    removeCustomer(id: number): Promise<Customer>;
    storeLineUserId(updateCustomerInput: UpdateCustomerInput): Promise<Customer[]>;
}
