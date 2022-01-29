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
exports.ClothesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const clothes_service_1 = require("./clothes.service");
const clothe_entity_1 = require("./entities/clothe.entity");
const create_clothe_input_1 = require("./dto/create-clothe.input");
const update_clothe_input_1 = require("./dto/update-clothe.input");
const create_clothe_problem_input_1 = require("./dto/create-clothe-problem.input");
let ClothesResolver = class ClothesResolver {
    constructor(clothesService) {
        this.clothesService = clothesService;
    }
    createClothe(createClotheInput) {
        return this.clothesService.create(createClotheInput);
    }
    async createClotheHasProblem(createClotheProblemInput) {
        await this.clothesService.createClotheHasProblem(createClotheProblemInput);
        return 'add problem clothe success';
    }
    findAll() {
        return this.clothesService.findAll();
    }
    findOne(id) {
        return this.clothesService.findOne(id);
    }
    async updateClothe(updateClotheInput) {
        this.clothesService.update(updateClotheInput.ids, updateClotheInput);
        return 'Updated';
    }
    async removeClothe(id) {
        const removeData = await this.clothesService.findOne(id);
        await this.clothesService.remove(id);
        return removeData;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => clothe_entity_1.Clothe),
    __param(0, (0, graphql_1.Args)('createClotheInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clothe_input_1.CreateClotheInput]),
    __metadata("design:returntype", void 0)
], ClothesResolver.prototype, "createClothe", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('createClotheProblemInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clothe_problem_input_1.CreateClotheProblemInput]),
    __metadata("design:returntype", Promise)
], ClothesResolver.prototype, "createClotheHasProblem", null);
__decorate([
    (0, graphql_1.Query)(() => [clothe_entity_1.Clothe], { name: 'clothes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClothesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => clothe_entity_1.Clothe, { name: 'clothe' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClothesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('updateClotheInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_clothe_input_1.UpdateClotheInput]),
    __metadata("design:returntype", Promise)
], ClothesResolver.prototype, "updateClothe", null);
__decorate([
    (0, graphql_1.Mutation)(() => clothe_entity_1.Clothe),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClothesResolver.prototype, "removeClothe", null);
ClothesResolver = __decorate([
    (0, graphql_1.Resolver)(() => clothe_entity_1.Clothe),
    __metadata("design:paramtypes", [clothes_service_1.ClothesService])
], ClothesResolver);
exports.ClothesResolver = ClothesResolver;
//# sourceMappingURL=clothes.resolver.js.map