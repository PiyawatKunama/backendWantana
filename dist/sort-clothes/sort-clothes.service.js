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
exports.SortClothesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const generateKey_1 = require("../global/generateKey");
const typeorm_2 = require("typeorm");
const sort_clothe_entity_1 = require("./entities/sort-clothe.entity");
let SortClothesService = class SortClothesService {
    constructor(sortClothesRepository) {
        this.sortClothesRepository = sortClothesRepository;
    }
    async create(createSortClotheInput) {
        const newSortClothe = this.sortClothesRepository.create(createSortClotheInput);
        const lastRecord = await this.sortClothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });
        newSortClothe.key = (0, generateKey_1.default)(lastRecord, 'SC');
        return await this.sortClothesRepository.save(newSortClothe);
    }
    async findAll() {
        return await this.sortClothesRepository.find({
            relations: ['clothes'],
        });
    }
    async findOne(id) {
        return await this.sortClothesRepository.findOneOrFail(id, {
            relations: ['clothes'],
        });
    }
    async findAllByIsDisable(isDisable) {
        return await this.sortClothesRepository.find(Object.assign({ relations: ['clothes'] }, { where: { isDisable } }));
    }
    async update(id, updateSortClotheInput) {
        const updateSortClothe = this.sortClothesRepository.create(updateSortClotheInput);
        return await this.sortClothesRepository.update(id, updateSortClothe);
    }
    async remove(id) {
        return this.sortClothesRepository.delete(id);
    }
};
SortClothesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sort_clothe_entity_1.SortClothe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SortClothesService);
exports.SortClothesService = SortClothesService;
//# sourceMappingURL=sort-clothes.service.js.map