import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeesResolver {
    constructor(private readonly employeesService: EmployeesService) {}

    @Mutation(() => Employee)
    createEmployee(
        @Args('createEmployeeInput') createEmployeeInput: CreateEmployeeInput,
    ) {
        return this.employeesService.create(createEmployeeInput);
    }

    @Query(() => [Employee], { name: 'employees' })
    findAll() {
        return this.employeesService.findAll();
    }

    @Query(() => [Employee], { name: 'deletedEmployees' })
    findAllDeleted() {
        return this.employeesService.findAllDeleted();
    }

    @Query(() => Employee, { name: 'employee' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.employeesService.findOne(id);
    }

    @Mutation(() => Employee)
    async updateEmployee(
        @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput,
    ) {
        await this.employeesService.update(
            updateEmployeeInput.id,
            updateEmployeeInput,
        );
        return await this.employeesService.findOne(updateEmployeeInput.id);
    }

    @Mutation(() => Employee)
    async removeEmployee(@Args('id', { type: () => Int }) id: number) {
        const removeData = await this.employeesService.findOne(id);
        await this.employeesService.remove(id);
        return removeData;
    }

    @Mutation(() => Employee)
    async softRemoveEmployee(@Args('id', { type: () => Int }) id: number) {
        const removeData = await this.employeesService.findOne(id);
        await this.employeesService.softDelete(id);
        return removeData;
    }

    @Mutation(() => Employee)
    async restoreEmployee(@Args('id', { type: () => Int }) id: number) {
        const removeData = await this.employeesService.findOne(id);
        await this.employeesService.restore(id);
        return removeData;
    }
}
