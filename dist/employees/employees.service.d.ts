import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';
export declare class EmployeesService {
    private employeesRepository;
    constructor(employeesRepository: Repository<Employee>);
    create(createEmployeeInput: CreateEmployeeInput): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    update(
        id: number,
        updateEmployeeInput: UpdateEmployeeInput,
    ): Promise<import('typeorm').UpdateResult>;
    remove(id: number): Promise<import('typeorm').DeleteResult>;
}
