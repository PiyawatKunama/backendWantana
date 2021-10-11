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
exports.SortClothesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const sort_clothes_service_1 = require("./sort-clothes.service");
const sort_clothe_entity_1 = require("./entities/sort-clothe.entity");
const create_sort_clothe_input_1 = require("./dto/create-sort-clothe.input");
const update_sort_clothe_input_1 = require("./dto/update-sort-clothe.input");
let SortClothesResolver = class SortClothesResolver {
    constructor(sortClothesService) {
        this.sortClothesService = sortClothesService;
    }
    createSortClothe(createSortClotheInput) {
        return this.sortClothesService.create(createSortClotheInput);
    }
    findAll() {
        return this.sortClothesService.findAll();
    }
    findOne(id) {
        return this.sortClothesService.findOne(id);
    }
    async updateSortClothe(updateSortClotheInput) {
        await this.sortClothesService.update(updateSortClotheInput.id, updateSortClotheInput);
        return await this.sortClothesService.findOne(updateSortClotheInput.id);
    }
    async removeSortClothe(id) {
        const removeData = await this.sortClothesService.findOne(id);
        this.sortClothesService.remove(id);
        return removeData;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => sort_clothe_entity_1.SortClothe),
    __param(0, (0, graphql_1.Args)('createSortClotheInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sort_clothe_input_1.CreateSortClotheInput]),
    __metadata("design:returntype", void 0)
], SortClothesResolver.prototype, "createSortClothe", null);
__decorate([
    (0, graphql_1.Query)(() => [sort_clothe_entity_1.SortClothe], { name: 'sortClothes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SortClothesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => sort_clothe_entity_1.SortClothe, { name: 'sortClothe' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SortClothesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => sort_clothe_entity_1.SortClothe),
    __param(0, (0, graphql_1.Args)('updateSortClotheInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_sort_clothe_input_1.UpdateSortClotheInput]),
    __metadata("design:returntype", Promise)
], SortClothesResolver.prototype, "updateSortClothe", null);
__decorate([
    (0, graphql_1.Mutation)(() => sort_clothe_entity_1.SortClothe),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SortClothesResolver.prototype, "removeSortClothe", null);
SortClothesResolver = __decorate([
    (0, graphql_1.Resolver)(() => sort_clothe_entity_1.SortClothe),
    __metadata("design:paramtypes", [sort_clothes_service_1.SortClothesService])
], SortClothesResolver);
exports.SortClothesResolver = SortClothesResolver;
//# sourceMappingURL=sort-clothes.resolver.js.map