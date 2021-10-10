'use strict';
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length,
            r =
                c < 3
                    ? target
                    : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
            d;
        if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r =
                        (c < 3
                            ? d(r)
                            : c > 3
                            ? d(target, key, r)
                            : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SortClothesModule = void 0;
const common_1 = require('@nestjs/common');
const sort_clothes_service_1 = require('./sort-clothes.service');
const sort_clothes_resolver_1 = require('./sort-clothes.resolver');
const sort_clothe_entity_1 = require('./entities/sort-clothe.entity');
const typeorm_1 = require('@nestjs/typeorm');
let SortClothesModule = class SortClothesModule {};
SortClothesModule = __decorate(
    [
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([
                    sort_clothe_entity_1.SortClothe,
                ]),
            ],
            providers: [
                sort_clothes_resolver_1.SortClothesResolver,
                sort_clothes_service_1.SortClothesService,
            ],
            exports: [sort_clothes_service_1.SortClothesService],
        }),
    ],
    SortClothesModule,
);
exports.SortClothesModule = SortClothesModule;
//# sourceMappingURL=sort-clothes.module.js.map
