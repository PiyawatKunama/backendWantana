import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SortClothesService } from './sort-clothes.service';
import { SortClothe } from './entities/sort-clothe.entity';
import { CreateSortClotheInput } from './dto/create-sort-clothe.input';
import { UpdateSortClotheInput } from './dto/update-sort-clothe.input';

@Resolver(() => SortClothe)
export class SortClothesResolver {
    constructor(private readonly sortClothesService: SortClothesService) {}

    @Mutation(() => SortClothe)
    createSortClothe(
        @Args('createSortClotheInput') createSortClotheInput: CreateSortClotheInput,
    ) {
        return this.sortClothesService.create(createSortClotheInput);
    }

    @Query(() => [SortClothe], { name: 'sortClothes' })
    findAll() {
        return this.sortClothesService.findAll();
    }

    @Query(() => SortClothe, { name: 'sortClothe' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.sortClothesService.findOne(id);
    }

    @Query(() => [SortClothe])
    sortClothesByIsDisable(
        @Args('isDisable', { type: () => Boolean }) isDisable: boolean,
    ) {
        return this.sortClothesService.findAllByIsDisable(isDisable);
    }

    @Mutation(() => SortClothe)
    async updateSortClothe(
        @Args('updateSortClotheInput') updateSortClotheInput: UpdateSortClotheInput,
    ) {
        await this.sortClothesService.update(
            updateSortClotheInput.id,
            updateSortClotheInput,
        );
        return await this.sortClothesService.findOne(updateSortClotheInput.id);
    }

    @Mutation(() => SortClothe)
    async removeSortClothe(@Args('id', { type: () => Int }) id: number) {
        const removeData = await this.sortClothesService.findOne(id);
        this.sortClothesService.remove(id);
        return removeData;
    }
}
