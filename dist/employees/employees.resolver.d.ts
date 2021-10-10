import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
export declare class EmployeesResolver {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    createEmployee(createEmployeeInput: CreateEmployeeInput): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee>;
    updateEmployee(updateEmployeeInput: UpdateEmployeeInput): Promise<Employee>;
    removeEmployee(id: number): Promise<Employee>;
}
