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
exports.DefectiveClothResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const defective_cloth_service_1 = require("./defective-cloth.service");
const defective_cloth_entity_1 = require("./entities/defective-cloth.entity");
const create_defective_cloth_input_1 = require("./dto/create-defective-cloth.input");
const update_defective_cloth_input_1 = require("./dto/update-defective-cloth.input");
let DefectiveClothResolver = class DefectiveClothResolver {
    constructor(defectiveClothService) {
        this.defectiveClothService = defectiveClothService;
    }
    createDefectiveCloth(createDefectiveClothInput) {
        return this.defectiveClothService.create(createDefectiveClothInput);
    }
    findAll() {
        return this.defectiveClothService.findAll();
    }
    findOne(id) {
        return this.defectiveClothService.findOne(id);
    }
    updateDefectiveCloth(updateDefectiveClothInput) {
        return this.defectiveClothService.update(updateDefectiveClothInput.id, updateDefectiveClothInput);
    }
    removeDefectiveCloth(id) {
        return this.defectiveClothService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => defective_cloth_entity_1.DefectiveCloth),
    __param(0, (0, graphql_1.Args)('createDefectiveClothInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_defective_cloth_input_1.CreateDefectiveClothInput]),
    __metadata("design:returntype", void 0)
], DefectiveClothResolver.prototype, "createDefectiveCloth", null);
__decorate([
    (0, graphql_1.Query)(() => [defective_cloth_entity_1.DefectiveCloth], { name: 'defectiveCloth' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DefectiveClothResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => defective_cloth_entity_1.DefectiveCloth, { name: 'defectiveCloth' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DefectiveClothResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => defective_cloth_entity_1.DefectiveCloth),
    __param(0, (0, graphql_1.Args)('updateDefectiveClothInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_defective_cloth_input_1.UpdateDefectiveClothInput]),
    __metadata("design:returntype", void 0)
], DefectiveClothResolver.prototype, "updateDefectiveCloth", null);
__decorate([
    (0, graphql_1.Mutation)(() => defective_cloth_entity_1.DefectiveCloth),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DefectiveClothResolver.prototype, "removeDefectiveCloth", null);
DefectiveClothResolver = __decorate([
    (0, graphql_1.Resolver)(() => defective_cloth_entity_1.DefectiveCloth),
    __metadata("design:paramtypes", [defective_cloth_service_1.DefectiveClothService])
], DefectiveClothResolver);
exports.DefectiveClothResolver = DefectiveClothResolver;
//# sourceMappingURL=defective-cloth.resolver.js.map