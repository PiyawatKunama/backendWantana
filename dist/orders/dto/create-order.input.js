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
exports.CreateOrderInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const status_1 = require("../enums/status");
let CreateOrderInput = class CreateOrderInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => status_1.Status, { nullable: true }),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.Int]),
    __metadata("design:type", Array)
], CreateOrderInput.prototype, "clotheIds", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "customerId", void 0);
CreateOrderInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderInput);
exports.CreateOrderInput = CreateOrderInput;
//# sourceMappingURL=create-order.input.js.map