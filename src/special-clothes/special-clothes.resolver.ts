import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SpecialClothesService } from './special-clothes.service';
import { SpecialClothe } from './entities/special-clothe.entity';
import { CreateSpecialClotheInput } from './dto/create-special-clothe.input';
import { UpdateSpecialClotheInput } from './dto/update-special-clothe.input';

@Resolver(() => SpecialClothe)
export class SpecialClothesResolver {
    constructor(private readonly specialClothesService: SpecialClothesService) {}

    @Mutation(() => SpecialClothe)
    createSpecialClothe(
        @Args('createSpecialClotheInput')
        createSpecialClotheInput: CreateSpecialClotheInput,
    ) {
        return this.specialClothesService.create(createSpecialClotheInput);
    }

    @Query(() => [SpecialClothe], { name: 'specialClothes' })
    findAll() {
        return this.specialClothesService.findAll();
    }

    @Query(() => SpecialClothe, { name: 'specialClothe' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.specialClothesService.findOne(id);
    }

    @Mutation(() => SpecialClothe)
    async updateSpecialClothe(
        @Args('updateSpecialClotheInput')
        updateSpecialClotheInput: UpdateSpecialClotheInput,
    ) {
        await this.specialClothesService.update(
            updateSpecialClotheInput.id,
            updateSpecialClotheInput,
        );
        return await this.specialClothesService.findOne(updateSpecialClotheInput.id);
    }

    @Mutation(() => SpecialClothe)
    async removeSpecialClothe(@Args('id', { type: () => Int }) id: number) {
        const removeSpecialClothe = await this.specialClothesService.findOne(id);
        await this.specialClothesService.remove(id);
        return removeSpecialClothe;
    }
}
