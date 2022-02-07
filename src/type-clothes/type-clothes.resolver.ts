import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TypeClothesService } from './type-clothes.service';
import { TypeClothe } from './entities/type-clothe.entity';
import { CreateTypeClotheInput } from './dto/create-type-clothe.input';
import { UpdateTypeClotheInput } from './dto/update-type-clothe.input';

@Resolver(() => TypeClothe)
export class TypeClothesResolver {
    constructor(private readonly typeClothesService: TypeClothesService) {}

    @Mutation(() => TypeClothe)
    createTypeClothe(
        @Args('createTypeClotheInput') createTypeClotheInput: CreateTypeClotheInput,
    ) {
        return this.typeClothesService.create(createTypeClotheInput);
    }

    @Query(() => [TypeClothe], { name: 'typeClothes' })
    findAll() {
        return this.typeClothesService.findAll();
    }

    @Query(() => TypeClothe, { name: 'typeClothe' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.typeClothesService.findOne(id);
    }

    @Query(() => [TypeClothe])
    typeClothesByIsDisable(
        @Args('isDisable', { type: () => Boolean }) isDisable: boolean,
    ) {
        return this.typeClothesService.findAllByIsDisable(isDisable);
    }

    @Mutation(() => TypeClothe)
    async updateTypeClothe(
        @Args('updateTypeClotheInput') updateTypeClotheInput: UpdateTypeClotheInput,
    ) {
        await this.typeClothesService.update(
            updateTypeClotheInput.id,
            updateTypeClotheInput,
        );
        return await this.typeClothesService.findOne(updateTypeClotheInput.id);
    }

    @Mutation(() => TypeClothe)
    async removeTypeClothe(@Args('id', { type: () => Int }) id: number) {
        const removeSortClothe = await this.typeClothesService.findOne(id);
        await this.typeClothesService.remove(id);
        return removeSortClothe;
    }
}
