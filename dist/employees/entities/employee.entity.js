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
Object.defineProperty(exports, '__esModule', { value: true });
exports.Employee = void 0;
const graphql_1 = require('@nestjs/graphql');
const order_entity_1 = require('../../orders/entities/order.entity');
const typeorm_1 = require('typeorm');
const role_1 = require('../enums/role');
let Employee = class Employee {};
__decorate(
    [
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        (0, graphql_1.Field)(() => graphql_1.Int),
        __metadata('design:type', Number),
    ],
    Employee.prototype,
    'id',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)(() => graphql_1.Int),
        __metadata('design:type', Number),
    ],
    Employee.prototype,
    'idCard',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)(),
        __metadata('design:type', String),
    ],
    Employee.prototype,
    'firstName',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)(),
        __metadata('design:type', String),
    ],
    Employee.prototype,
    'lastName',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)(),
        __metadata('design:type', String),
    ],
    Employee.prototype,
    'address',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)(() => graphql_1.Int),
        __metadata('design:type', Number),
    ],
    Employee.prototype,
    'phoneNumber',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)(),
        __metadata('design:type', String),
    ],
    Employee.prototype,
    'email',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)(),
        __metadata('design:type', String),
    ],
    Employee.prototype,
    'password',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)(() => role_1.Role),
        __metadata('design:type', Number),
    ],
    Employee.prototype,
    'role',
    void 0,
);
__decorate(
    [
        (0, typeorm_1.OneToMany)(
            () => order_entity_1.Order,
            (order) => order.employee,
        ),
        (0, graphql_1.Field)(() => [order_entity_1.Order], { nullable: true }),
        __metadata('design:type', Array),
    ],
    Employee.prototype,
    'orders',
    void 0,
);
Employee = __decorate(
    [(0, typeorm_1.Entity)(), (0, graphql_1.ObjectType)()],
    Employee,
);
exports.Employee = Employee;
//# sourceMappingURL=employee.entity.js.map
