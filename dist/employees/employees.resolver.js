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
exports.EmployeesResolver = void 0;
const graphql_1 = require('@nestjs/graphql');
const employees_service_1 = require('./employees.service');
const employee_entity_1 = require('./entities/employee.entity');
const create_employee_input_1 = require('./dto/create-employee.input');
const update_employee_input_1 = require('./dto/update-employee.input');
let EmployeesResolver = class EmployeesResolver {
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    createEmployee(createEmployeeInput) {
        return this.employeesService.create(createEmployeeInput);
    }
    findAll() {
        return this.employeesService.findAll();
    }
    findOne(id) {
        return this.employeesService.findOne(id);
    }
    async updateEmployee(updateEmployeeInput) {
        await this.employeesService.update(
            updateEmployeeInput.id,
            updateEmployeeInput,
        );
        return await this.employeesService.findOne(updateEmployeeInput.id);
    }
    async removeEmployee(id) {
        const removeData = await this.employeesService.findOne(id);
        await this.employeesService.remove(id);
        return removeData;
    }
};
__decorate(
    [
        (0, graphql_1.Mutation)(() => employee_entity_1.Employee),
        __param(0, (0, graphql_1.Args)('createEmployeeInput')),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [
            create_employee_input_1.CreateEmployeeInput,
        ]),
        __metadata('design:returntype', void 0),
    ],
    EmployeesResolver.prototype,
    'createEmployee',
    null,
);
__decorate(
    [
        (0, graphql_1.Query)(() => [employee_entity_1.Employee], {
            name: 'employees',
        }),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', void 0),
    ],
    EmployeesResolver.prototype,
    'findAll',
    null,
);
__decorate(
    [
        (0, graphql_1.Query)(() => employee_entity_1.Employee, { name: 'employee' }),
        __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Number]),
        __metadata('design:returntype', void 0),
    ],
    EmployeesResolver.prototype,
    'findOne',
    null,
);
__decorate(
    [
        (0, graphql_1.Mutation)(() => employee_entity_1.Employee),
        __param(0, (0, graphql_1.Args)('updateEmployeeInput')),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [
            update_employee_input_1.UpdateEmployeeInput,
        ]),
        __metadata('design:returntype', Promise),
    ],
    EmployeesResolver.prototype,
    'updateEmployee',
    null,
);
__decorate(
    [
        (0, graphql_1.Mutation)(() => employee_entity_1.Employee),
        __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Number]),
        __metadata('design:returntype', Promise),
    ],
    EmployeesResolver.prototype,
    'removeEmployee',
    null,
);
EmployeesResolver = __decorate(
    [
        (0, graphql_1.Resolver)(() => employee_entity_1.Employee),
        __metadata('design:paramtypes', [employees_service_1.EmployeesService]),
    ],
    EmployeesResolver,
);
exports.EmployeesResolver = EmployeesResolver;
//# sourceMappingURL=employees.resolver.js.map
