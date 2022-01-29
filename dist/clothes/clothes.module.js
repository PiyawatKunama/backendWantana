"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClothesModule = void 0;
const special_clothes_module_1 = require("./../special-clothes/special-clothes.module");
const common_1 = require("@nestjs/common");
const clothes_service_1 = require("./clothes.service");
const clothes_resolver_1 = require("./clothes.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const clothe_entity_1 = require("./entities/clothe.entity");
const type_clothes_module_1 = require("../type-clothes/type-clothes.module");
const sort_clothes_module_1 = require("../sort-clothes/sort-clothes.module");
const orders_module_1 = require("../orders/orders.module");
const clotheHasProblem_entity_1 = require("./entities/clotheHasProblem.entity");
const problem_clothes_module_1 = require("../problem-clothes/problem-clothes.module");
let ClothesModule = class ClothesModule {
};
ClothesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([clothe_entity_1.Clothe, clotheHasProblem_entity_1.ClotheHasProblem]),
            type_clothes_module_1.TypeClothesModule,
            sort_clothes_module_1.SortClothesModule,
            special_clothes_module_1.SpecialClothesModule,
            problem_clothes_module_1.ProblemClothesModule,
            orders_module_1.OrdersModule,
        ],
        providers: [clothes_resolver_1.ClothesResolver, clothes_service_1.ClothesService],
        exports: [clothes_service_1.ClothesService],
    })
], ClothesModule);
exports.ClothesModule = ClothesModule;
//# sourceMappingURL=clothes.module.js.map