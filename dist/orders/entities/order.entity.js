"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const graphql_1 = require("@nestjs/graphql");
const clothe_entity_1 = require("../../clothes/entities/clothe.entity");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const employee_entity_1 = require("../../employees/entities/employee.entity");
const typeorm_1 = require("typeorm");
let Order = class Order {
    beforeInsertActions() {
        this.created_at = new Date();
        this.updated_at = new Date();
        this.status = 'STATUS_DEFAULT';
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Order.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Order.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => clothe_entity_1.Clothe, (clothe) => clothe.orders),
    (0, graphql_1.Field)(() => [clothe_entity_1.Clothe]),
    __metadata("design:type", Array)
], Order.prototype, "clothes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.orders, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => employee_entity_1.Employee),
    __metadata("design:type", employee_entity_1.Employee)
], Order.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.orders, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => customer_entity_1.Customer),
    __metadata("design:type", customer_entity_1.Customer)
], Order.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Order.prototype, "beforeInsertActions", null);
Order = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map