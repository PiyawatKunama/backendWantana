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
var __metadata =
    (this && this.__metadata) ||
    function (k, v) {
        if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
            return Reflect.metadata(k, v);
    };
var __param =
    (this && this.__param) ||
    function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.TypeClothesResolver = void 0;
const graphql_1 = require('@nestjs/graphql');
const type_clothes_service_1 = require('./type-clothes.service');
const type_clothe_entity_1 = require('./entities/type-clothe.entity');
const create_type_clothe_input_1 = require('./dto/create-type-clothe.input');
const update_type_clothe_input_1 = require('./dto/update-type-clothe.input');
let TypeClothesResolver = class TypeClothesResolver {
    constructor(typeClothesService) {
        this.typeClothesService = typeClothesService;
    }
    createTypeClothe(createTypeClotheInput) {
        return this.typeClothesService.create(createTypeClotheInput);
    }
    findAll() {
        return this.typeClothesService.findAll();
    }
    findOne(id) {
        return this.typeClothesService.findOne(id);
    }
    async updateTypeClothe(updateTypeClotheInput) {
        await this.typeClothesService.update(
            updateTypeClotheInput.id,
            updateTypeClotheInput,
        );
        return await this.typeClothesService.findOne(updateTypeClotheInput.id);
    }
    async removeTypeClothe(id) {
        const removeSortClothe = await this.typeClothesService.findOne(id);
        await this.typeClothesService.remove(id);
        return removeSortClothe;
    }
};
__decorate(
    [
        (0, graphql_1.Mutation)(() => type_clothe_entity_1.TypeClothe),
        __param(0, (0, graphql_1.Args)('createTypeClotheInput')),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [
            create_type_clothe_input_1.CreateTypeClotheInput,
        ]),
        __metadata('design:returntype', void 0),
    ],
    TypeClothesResolver.prototype,
    'createTypeClothe',
    null,
);
__decorate(
    [
        (0, graphql_1.Query)(() => [type_clothe_entity_1.TypeClothe], {
            name: 'typeClothes',
        }),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', void 0),
    ],
    TypeClothesResolver.prototype,
    'findAll',
    null,
);
__decorate(
    [
        (0, graphql_1.Query)(() => type_clothe_entity_1.TypeClothe, {
            name: 'typeClothe',
        }),
        __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Number]),
        __metadata('design:returntype', void 0),
    ],
    TypeClothesResolver.prototype,
    'findOne',
    null,
);
__decorate(
    [
        (0, graphql_1.Mutation)(() => type_clothe_entity_1.TypeClothe),
        __param(0, (0, graphql_1.Args)('updateTypeClotheInput')),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [
            update_type_clothe_input_1.UpdateTypeClotheInput,
        ]),
        __metadata('design:returntype', Promise),
    ],
    TypeClothesResolver.prototype,
    'updateTypeClothe',
    null,
);
__decorate(
    [
        (0, graphql_1.Mutation)(() => type_clothe_entity_1.TypeClothe),
        __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Number]),
        __metadata('design:returntype', Promise),
    ],
    TypeClothesResolver.prototype,
    'removeTypeClothe',
    null,
);
TypeClothesResolver = __decorate(
    [
        (0, graphql_1.Resolver)(() => type_clothe_entity_1.TypeClothe),
        __metadata('design:paramtypes', [type_clothes_service_1.TypeClothesService]),
    ],
    TypeClothesResolver,
);
exports.TypeClothesResolver = TypeClothesResolver;
//# sourceMappingURL=type-clothes.resolver.js.map
