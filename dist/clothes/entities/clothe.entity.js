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
exports.Clothe = void 0;
const problem_clothe_entity_1 = require("./../../problem-clothes/entities/problem-clothe.entity");
const graphql_1 = require("@nestjs/graphql");
const order_entity_1 = require("../../orders/entities/order.entity");
const sort_clothe_entity_1 = require("../../sort-clothes/entities/sort-clothe.entity");
const type_clothe_entity_1 = require("../../type-clothes/entities/type-clothe.entity");
const typeorm_1 = require("typeorm");
const special_clothe_entity_1 = require("../../special-clothes/entities/special-clothe.entity");
let Clothe = class Clothe {
    beforeInsertActions() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Clothe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Clothe.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Clothe.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Clothe.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => type_clothe_entity_1.TypeClothe, (typeClothe) => typeClothe.clothes, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => type_clothe_entity_1.TypeClothe),
    __metadata("design:type", type_clothe_entity_1.TypeClothe)
], Clothe.prototype, "typeClothe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sort_clothe_entity_1.SortClothe, (sortClothe) => sortClothe.clothes, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => sort_clothe_entity_1.SortClothe),
    __metadata("design:type", sort_clothe_entity_1.SortClothe)
], Clothe.prototype, "sortClothe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => problem_clothe_entity_1.ProblemClothe, (problemClothe) => problemClothe.clothes, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => problem_clothe_entity_1.ProblemClothe),
    __metadata("design:type", problem_clothe_entity_1.ProblemClothe)
], Clothe.prototype, "problemClothe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => special_clothe_entity_1.SpecialClothe, (SpecialClothe) => SpecialClothe.clothes, {
        onDelete: 'CASCADE',
    }),
    (0, graphql_1.Field)(() => special_clothe_entity_1.SpecialClothe),
    __metadata("design:type", special_clothe_entity_1.SpecialClothe)
], Clothe.prototype, "specialClothe", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => order_entity_1.Order, (order) => order.clothes),
    (0, typeorm_1.JoinTable)({
        name: 'order_details',
    }),
    (0, graphql_1.Field)(() => [order_entity_1.Order]),
    __metadata("design:type", Array)
], Clothe.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Clothe.prototype, "beforeInsertActions", null);
Clothe = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Clothe);
exports.Clothe = Clothe;
//# sourceMappingURL=clothe.entity.js.map