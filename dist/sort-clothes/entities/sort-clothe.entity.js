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
exports.SortClothe = void 0;
const graphql_1 = require("@nestjs/graphql");
const clothe_entity_1 = require("../../clothes/entities/clothe.entity");
const typeorm_1 = require("typeorm");
let SortClothe = class SortClothe {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], SortClothe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], SortClothe.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], SortClothe.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], SortClothe.prototype, "isDisable", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => clothe_entity_1.Clothe, (clothe) => clothe.sortClothe),
    (0, graphql_1.Field)(() => [clothe_entity_1.Clothe], { nullable: true }),
    __metadata("design:type", Array)
], SortClothe.prototype, "clothes", void 0);
SortClothe = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], SortClothe);
exports.SortClothe = SortClothe;
//# sourceMappingURL=sort-clothe.entity.js.map