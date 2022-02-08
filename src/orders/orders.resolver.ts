import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Status } from 'src/global/enum/status';
import { FilterInput } from './dto/filter.input';

@Resolver(() => Order)
export class OrdersResolver {
    constructor(private readonly ordersService: OrdersService) {}

    @Mutation(() => Order)
    createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
        return this.ordersService.create(createOrderInput);
    }

    @Query(() => [Order], { name: 'orders' })
    findAll() {
        return this.ordersService.findAll();
    }

    @Query(() => Order, { name: 'order' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.ordersService.findOne(id);
    }

    @Query(() => [Order])
    primaryOrders() {
        return this.ordersService.findAllPrimaryOrder();
    }

    @Query(() => [Order])
    findOneByPrimaryId(@Args('id', { type: () => Int }) id: number) {
        return this.ordersService.findOneByPrimaryId(id);
    }

    @Query(() => [Order])
    filterOrder(
        @Args('filterInput', { type: () => FilterInput }) filterInput: FilterInput,
    ) {
        return this.ordersService.filter(filterInput);
    }

    @Query(() => [Order])
    findOrderByStatus(@Args('status', { type: () => Status }) status: Status) {
        return this.ordersService.findByStatus(status);
    }

    @Mutation(() => Order)
    removeOrder(@Args('id', { type: () => Int }) id: number) {
        return this.ordersService.remove(id);
    }

    @Mutation(() => Order)
    async updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
        await this.ordersService.update(updateOrderInput.id, updateOrderInput);
        return await this.ordersService.findOne(updateOrderInput.id);
    }
}
