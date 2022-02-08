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
const orders_service_1 = require("../orders/orders.service");
const clotheHasProblem_entity_1 = require("./entities/clotheHasProblem.entity");
let ClothesService = class ClothesService {
    constructor(clothesRepository, clotheHasProblemsRepository, typeClothesService, sortClothesService, problemClothesService, specialClothesService, ordersService) {
        this.clothesRepository = clothesRepository;
        this.clotheHasProblemsRepository = clotheHasProblemsRepository;
        this.typeClothesService = typeClothesService;
        this.sortClothesService = sortClothesService;
        this.problemClothesService = problemClothesService;
        this.specialClothesService = specialClothesService;
        this.ordersService = ordersService;
    }
    async createClotheHasProblem(createClotheProblem) {
        for (let i = 0; i < createClotheProblem.clotheIds.length; i++) {
            const newClotheProblem = this.clotheHasProblemsRepository.create({
                status: createClotheProblem.status,
            });
            const cloth = await this.findOne(createClotheProblem.clotheIds[i]);
            newClotheProblem.clothe = cloth;
            const problemClothe = await this.problemClothesService.findOne(createClotheProblem.problemClothes);
            newClotheProblem.problemClothe = problemClothe;
            await this.clotheHasProblemsRepository.save(newClotheProblem);
        }
    }
    async create(createClotheInput) {
        const newClothe = this.clothesRepository.create(createClotheInput);
        if (createClotheInput.typeClotheId) {
            const typeClothe = await this.typeClothesService.findOne(createClotheInput.typeClotheId);
            newClothe.typeClothe = typeClothe;
        }
        if (createClotheInput.sortClotheId) {
            const sortClothe = await this.sortClothesService.findOne(createClotheInput.sortClotheId);
            newClothe.sortClothe = sortClothe;
        }
        if (createClotheInput.specialClothId) {
            const specialClothe = await this.specialClothesService.findOne(createClotheInput.specialClothId);
            newClothe.specialClothe = specialClothe;
        }
        const order = await this.ordersService.findOne(createClotheInput.orderId);
        newClothe.order = order;
        const lastRecord = await this.clothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });
        newClothe.key = (0, generateKey_1.default)(lastRecord, 'CL');
        return await this.clothesRepository.save(newClothe);
    }
    async findAll() {
        return await this.clothesRepository.find(relations_1.Relations);
    }
    async findOne(id) {
        return await this.clothesRepository.findOneOrFail(id, relations_1.Relations);
    }
    async filter(filterClotheInput) {
        const clothesQuery = this.clothesRepository
            .createQueryBuilder('clothes')
            .leftJoinAndSelect('clothes.order', 'order')
            .leftJoinAndSelect('clothes.typeClothe', 'typeClothe')
            .leftJoinAndSelect('clothes.sortClothe', 'sortClothe')
            .leftJoinAndSelect('clothes.specialClothe', 'specialClothe')
            .leftJoinAndSelect('clothes.clotheHasProblems', 'clotheHasProblems')
            .leftJoinAndSelect('clotheHasProblems.problemClothe', 'problemClothe');
        if (filterClotheInput) {
            const { typeName, sortName, spacialName } = filterClotheInput;
            if (typeName) {
                clothesQuery.andWhere('typeClothe.name = :name', {
                    name: typeName,
                });
            }
            if (sortName) {
                clothesQuery.andWhere('sortClothe.name = :name', {
                    name: sortName,
                });
            }
            if (spacialName) {
                clothesQuery.andWhere('specialClothe.name = :name', {
                    name: spacialName,
                });
            }
        }
        const queryClothe = await clothesQuery.getMany();
        let filterClothe = queryClothe;
        if (filterClotheInput.haveProblems === true) {
            if (queryClothe.length) {
                filterClothe = queryClothe.filter((clothe) => {
                    if (clothe.clotheHasProblems.length) {
                        return clothe;
                    }
                });
            }
        }
        if (filterClotheInput.haveProblems === false) {
            if (queryClothe.length) {
                filterClothe = queryClothe.filter((clothe) => {
                    if (!clothe.clotheHasProblems.length) {
                        return clothe;
                    }
                });
            }
        }
        return filterClothe;
    }
    update(ids, updateClotheInput) {
        const updateClothe = this.clothesRepository.create(updateClotheInput);
        ids.forEach(async (id) => {
            await this.clothesRepository.update(id, updateClothe);
        });
    }
    async remove(id) {
        return await this.clothesRepository.delete(id);
    }
};
ClothesService = __decorate([
    (0, typeorm_2.Entity)(),
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clothe_entity_1.Clothe)),
    __param(1, (0, typeorm_1.InjectRepository)(clotheHasProblem_entity_1.ClotheHasProblem)),
    __param(6, (0, common_1.Inject)((0, common_1.forwardRef)(() => orders_service_1.OrdersService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        type_clothes_service_1.TypeClothesService,
        sort_clothes_service_1.SortClothesService,
        problem_clothes_service_1.ProblemClothesService,
        special_clothes_service_1.SpecialClothesService,
        orders_service_1.OrdersService])
], ClothesService);
exports.ClothesService = ClothesService;
//# sourceMappingURL=clothes.service.js.map