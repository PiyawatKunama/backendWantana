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
exports.TypeClothesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const generateKey_1 = require("../global/generateKey");
const typeorm_2 = require("typeorm");
const type_clothe_entity_1 = require("./entities/type-clothe.entity");
let TypeClothesService = class TypeClothesService {
    constructor(typeClothesRepository) {
        this.typeClothesRepository = typeClothesRepository;
    }
    async create(createTypeClotheInput) {
        const newTypeClothe = this.typeClothesRepository.create(createTypeClotheInput);
        const findLastRecord = await this.typeClothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });
        newTypeClothe.key = (0, generateKey_1.default)(findLastRecord, 'TC');
        return await this.typeClothesRepository.save(newTypeClothe);
    }
    async findAll() {
        return await this.typeClothesRepository.find({
            relations: ['clothes'],
        });
    }
    async findOne(id) {
        return await this.typeClothesRepository.findOneOrFail(id, {
            relations: ['clothes'],
        });
    }
    async update(id, updateTypeClotheInput) {
        const updateTypeClothe = this.typeClothesRepository.create(updateTypeClotheInput);
        return await this.typeClothesRepository.update(id, updateTypeClothe);
    }
    async remove(id) {
        return await this.typeClothesRepository.delete(id);
    }
};
TypeClothesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(type_clothe_entity_1.TypeClothe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeClothesService);
exports.TypeClothesService = TypeClothesService;
//# sourceMappingURL=type-clothes.service.js.map