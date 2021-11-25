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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const customers_service_1 = require("./customers.service");
const customer_entity_1 = require("./entities/customer.entity");
const create_customer_input_1 = require("./dto/create-customer.input");
const update_customer_input_1 = require("./dto/update-customer.input");
let CustomersResolver = class CustomersResolver {
    constructor(customersService) {
        this.customersService = customersService;
    }
    createCustomer(createCustomerInput) {
        return this.customersService.create(createCustomerInput);
    }
    findAll() {
        return this.customersService.findAll();
    }
    findOne(id) {
        return this.customersService.findOne(id);
    }
    async updateCustomer(updateCustomerInput) {
        await this.customersService.update(updateCustomerInput.id, updateCustomerInput);
        return await this.customersService.findOne(updateCustomerInput.id);
    }
    async removeCustomer(id) {
        const removeData = await this.customersService.findOne(id);
        await this.customersService.remove(id);
        return removeData;
    }
    async storeLineUserId(updateCustomerInput) {
        await this.customersService.storeLineUserId(updateCustomerInput);
        return this.customersService.findAll();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => customer_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('createCustomerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_input_1.CreateCustomerInput]),
    __metadata("design:returntype", void 0)
], CustomersResolver.prototype, "createCustomer", null);
__decorate([
    (0, graphql_1.Query)(() => [customer_entity_1.Customer], { name: 'customers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => customer_entity_1.Customer, { name: 'customer' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CustomersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => customer_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('updateCustomerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_customer_input_1.UpdateCustomerInput]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "updateCustomer", null);
__decorate([
    (0, graphql_1.Mutation)(() => customer_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "removeCustomer", null);
__decorate([
    (0, graphql_1.Mutation)(() => [customer_entity_1.Customer]),
    __param(0, (0, graphql_1.Args)('updateCustomerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_customer_input_1.UpdateCustomerInput]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "storeLineUserId", null);
CustomersResolver = __decorate([
    (0, graphql_1.Resolver)(() => customer_entity_1.Customer),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersResolver);
exports.CustomersResolver = CustomersResolver;
//# sourceMappingURL=customers.resolver.js.map