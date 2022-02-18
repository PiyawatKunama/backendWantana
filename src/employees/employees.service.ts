import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateKey } from 'src/global/generateKey';
import { IsNull, Not, Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';
import { Relations } from './relations';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee)
        private employeesRepository: Repository<Employee>,
    ) {}

    async create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
        const newEmployee = this.employeesRepository.create(createEmployeeInput);
        const lastRecord = await this.employeesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        newEmployee.key = generateKey(lastRecord, 'EM');

        return await this.employeesRepository.save(newEmployee);
    }

    async findAll(): Promise<Employee[]> {
        return await this.employeesRepository.find({
            ...Relations,
            where: {
                deleted_at: IsNull(),
            },
        });
    }

    async findAllDeleted(): Promise<Employee[]> {
        return await this.employeesRepository.find({
            ...Relations,
            where: {
                deleted_at: Not(IsNull()),
            },
        });
    }

    async findOne(id: number): Promise<Employee> {
        return await this.employeesRepository.findOneOrFail(id, Relations);
    }

    async update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
        const updateEmployee = this.employeesRepository.create(updateEmployeeInput);
        return await this.employeesRepository.update(id, updateEmployee);
    }

    async softDelete(id: number) {
        const date = new Date();
        return await this.employeesRepository.update(id, { deleted_at: date });
    }

    async restore(id: number) {
        return await this.employeesRepository.update(id, { deleted_at: null });
    }

    async remove(id: number) {
        return await this.employeesRepository.delete(id);
    }
}
