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
exports.ClothesService = void 0;
const problem_clothes_service_1 = require("./../problem-clothes/problem-clothes.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const generateKey_1 = require("../global/generateKey");
const sort_clothes_service_1 = require("../sort-clothes/sort-clothes.service");
const type_clothes_service_1 = require("../type-clothes/type-clothes.service");
const typeorm_2 = require("typeorm");
const clothe_entity_1 = require("./entities/clothe.entity");
const relations_1 = require("./relations");
const special_clothes_service_1 = require("../special-clothes/special-clothes.service");
let ClothesService = class ClothesService {
    constructor(clothesRepository, typeClothesService, sortClothesService, problemClothesService, specialClothesService) {
        this.clothesRepository = clothesRepository;
        this.typeClothesService = typeClothesService;
        this.sortClothesService = sortClothesService;
        this.problemClothesService = problemClothesService;
        this.specialClothesService = specialClothesService;
    }
    async create(createClotheInput) {
        const newClothe = this.clothesRepository.create(createClotheInput);
        const typeClothe = await this.typeClothesService.findOne(createClotheInput.typeClotheId);
        newClothe.typeClothe = typeClothe;
        const sortClothe = await this.sortClothesService.findOne(createClotheInput.sortClotheId);
        newClothe.sortClothe = sortClothe;
        const problemClothe = await this.problemClothesService.findOne(createClotheInput.problemClotheId);
        newClothe.problemClothe = problemClothe;
        const specialClothe = await this.specialClothesService.findOne(createClotheInput.specialClothId);
        newClothe.specialClothe = specialClothe;
        const findLastRecord = await this.clothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });
        newClothe.key = (0, generateKey_1.default)(findLastRecord, 'CL');
        return await this.clothesRepository.save(newClothe);
    }
    async findAll() {
        return await this.clothesRepository.find(relations_1.Relations);
    }
    async findOne(id) {
        return await this.clothesRepository.findOneOrFail(id, relations_1.Relations);
    }
    async update(id, updateClotheInput) {
        const updateClothe = this.clothesRepository.create(updateClotheInput);
        return await this.clothesRepository.update(id, updateClothe);
    }
    async remove(id) {
        return await this.clothesRepository.delete(id);
    }
};
ClothesService = __decorate([
    (0, typeorm_2.Entity)(),
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clothe_entity_1.Clothe)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        type_clothes_service_1.TypeClothesService,
        sort_clothes_service_1.SortClothesService,
        problem_clothes_service_1.ProblemClothesService,
        special_clothes_service_1.SpecialClothesService])
], ClothesService);
exports.ClothesService = ClothesService;
//# sourceMappingURL=clothes.service.js.map