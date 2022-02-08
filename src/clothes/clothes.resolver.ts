import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClothesService } from './clothes.service';
import { Clothe } from './entities/clothe.entity';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';
import { CreateClotheProblemInput } from './dto/create-clothe-problem.input';
import { FilterClotheInput } from './dto/filter.input';

@Resolver(() => Clothe)
export class ClothesResolver {
    constructor(private readonly clothesService: ClothesService) {}

    @Mutation(() => Clothe)
    createClothe(@Args('createClotheInput') createClotheInput: CreateClotheInput) {
        return this.clothesService.create(createClotheInput);
    }

    @Mutation(() => String)
    async createClotheHasProblem(
        @Args('createClotheProblemInput')
        createClotheProblemInput: CreateClotheProblemInput,
    ) {
        await this.clothesService.createClotheHasProblem(createClotheProblemInput);
        return 'add problem clothe success';
    }

    @Query(() => [Clothe], { name: 'clothes' })
    findAll() {
        return this.clothesService.findAll();
    }

    @Query(() => Clothe, { name: 'clothe' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.clothesService.findOne(id);
    }

    @Query(() => [Clothe])
    filterClothe(
        @Args('filterInput', { type: () => FilterClotheInput })
        filterInput: FilterClotheInput,
    ) {
        return this.clothesService.filter(filterInput);
    }

    @Mutation(() => String)
    async updateClothe(
        @Args('updateClotheInput') updateClotheInput: UpdateClotheInput,
    ) {
        this.clothesService.update(updateClotheInput.ids, updateClotheInput);
        return 'Updated';
    }

    @Mutation(() => Clothe)
    async removeClothe(@Args('id', { type: () => Int }) id: number) {
        const removeData = await this.clothesService.findOne(id);
        await this.clothesService.remove(id);
        return removeData;
    }
}
