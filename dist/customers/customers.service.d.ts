import { Repository } from 'typeorm';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer } from './entities/customer.entity';
export declare class CustomersService {
    private customersRepository;
    constructor(customersRepository: Repository<Customer>);
    create(createCustomerInput: CreateCustomerInput): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    update(
        id: number,
        updateCustomerInput: UpdateCustomerInput,
    ): Promise<import('typeorm').UpdateResult>;
    remove(id: number): Promise<import('typeorm').DeleteResult>;
}
