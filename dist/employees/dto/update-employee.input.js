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
exports.UpdateEmployeeInput = void 0;
const create_employee_input_1 = require("./create-employee.input");
const graphql_1 = require("@nestjs/graphql");
const role_1 = require("../enums/role");
let UpdateEmployeeInput = class UpdateEmployeeInput extends (0, graphql_1.PartialType)(create_employee_input_1.CreateEmployeeInput) {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateEmployeeInput.prototype, "idCard", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateEmployeeInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateEmployeeInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateEmployeeInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateEmployeeInput.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateEmployeeInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateEmployeeInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_1.Role, { nullable: true }),
    __metadata("design:type", Number)
], UpdateEmployeeInput.prototype, "role", void 0);
UpdateEmployeeInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateEmployeeInput);
exports.UpdateEmployeeInput = UpdateEmployeeInput;
//# sourceMappingURL=update-employee.input.js.map