import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Resolver(() => Customer)
export class CustomersResolver {
    constructor(private readonly customersService: CustomersService) {}

    @Mutation(() => Customer)
    createCustomer(
        @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
    ) {
        return this.customersService.create(createCustomerInput);
    }

    @Query(() => [Customer], { name: 'customers' })
    findAll() {
        return this.customersService.findAll();
    }

    @Query(() => Customer, { name: 'customer' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.customersService.findOne(id);
    }

    @Mutation(() => Customer)
    async updateCustomer(
        @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
    ) {
        await this.customersService.update(
            updateCustomerInput.id,
            updateCustomerInput,
        );
        return await this.customersService.findOne(updateCustomerInput.id);
    }

    @Mutation(() => Customer)
    async removeCustomer(@Args('id', { type: () => Int }) id: number) {
        const removeData = await this.customersService.findOne(id);
        await this.customersService.remove(id);
        return removeData;
    }

    @Mutation(() => [Customer])
    async storeLineUserId(
        @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
    ) {
        await this.customersService.storeLineUserId(updateCustomerInput);
        return this.customersService.findAll();
    }
}
