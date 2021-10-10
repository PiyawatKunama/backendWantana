'use strict';
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length,
            r =
                c < 3
                    ? target
                    : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
            d;
        if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r =
                        (c < 3
                            ? d(r)
                            : c > 3
                            ? d(target, key, r)
                            : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var __metadata =
    (this && this.__metadata) ||
    function (k, v) {
        if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
    };
var __param =
    (this && this.__param) ||
    function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.EmployeesService = void 0;
const common_1 = require('@nestjs/common');
const typeorm_1 = require('@nestjs/typeorm');
const customer_entity_1 = require('../customers/entities/customer.entity');
const typeorm_2 = require('typeorm');
const employee_entity_1 = require('./entities/employee.entity');
const relations_1 = require('./relations');
let EmployeesService = class EmployeesService {
    constructor(employeesRepository) {
        this.employeesRepository = employeesRepository;
    }
    async create(createEmployeeInput) {
        const newEmployee = this.employeesRepository.create(createEmployeeInput);
        return await this.employeesRepository.save(newEmployee);
    }
    async findAll() {
        return await this.employeesRepository.find(relations_1.Relations);
    }
    async findOne(id) {
        return await this.employeesRepository.findOneOrFail(
            id,
            relations_1.Relations,
        );
    }
    async update(id, updateEmployeeInput) {
        const updateEmployee = this.employeesRepository.create(updateEmployeeInput);
        return await this.employeesRepository.update(id, updateEmployee);
    }
    async remove(id) {
        return await this.employeesRepository.delete(id);
    }
};
EmployeesService = __decorate(
    [
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
        __metadata('design:paramtypes', [typeorm_2.Repository]),
    ],
    EmployeesService,
);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map
