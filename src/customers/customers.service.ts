import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer } from './entities/customer.entity';
import { Relations } from './relations';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customer)
        private customersRepository: Repository<Customer>,
    ) {}

    async create(createCustomerInput: CreateCustomerInput): Promise<Customer> {
        const newCustomer = this.customersRepository.create(createCustomerInput);
        return await this.customersRepository.save(newCustomer);
    }

    async findAll(): Promise<Customer[]> {
        return await this.customersRepository.find(Relations);
    }

    async findOne(id: number): Promise<Customer> {
        return await this.customersRepository.findOneOrFail(id, Relations);
    }

    async update(id: number, updateCustomerInput: UpdateCustomerInput) {
        const updateCustomer = this.customersRepository.create(updateCustomerInput);
        return await this.customersRepository.update(id, updateCustomer);
    }

    async remove(id: number) {
        return await this.customersRepository.delete(id);
    }
}
