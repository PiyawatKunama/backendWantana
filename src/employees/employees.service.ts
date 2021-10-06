import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { Repository } from 'typeorm';
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
    return await this.employeesRepository.save(newEmployee);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeesRepository.find(Relations);
  }

  async findOne(id: number): Promise<Employee> {
    return await this.employeesRepository.findOneOrFail(id, Relations);
  }

  async update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    const updateEmployee = this.employeesRepository.create(updateEmployeeInput);
    return await this.employeesRepository.update(id, updateEmployee);
  }

  async remove(id: number) {
    return await this.employeesRepository.delete(id);
  }
}
