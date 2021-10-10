import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClothesService } from './clothes.service';
import { Clothe } from './entities/clothe.entity';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';

@Resolver(() => Clothe)
export class ClothesResolver {
    constructor(private readonly clothesService: ClothesService) {}

    @Mutation(() => Clothe)
    createClothe(@Args('createClotheInput') createClotheInput: CreateClotheInput) {
        return this.clothesService.create(createClotheInput);
    }

    @Query(() => [Clothe], { name: 'clothes' })
    findAll() {
        return this.clothesService.findAll();
    }

    @Query(() => Clothe, { name: 'clothe' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.clothesService.findOne(id);
    }

    @Mutation(() => Clothe)
    updateClothe(@Args('updateClotheInput') updateClotheInput: UpdateClotheInput) {
        return this.clothesService.update(updateClotheInput.id, updateClotheInput);
    }

    @Mutation(() => Clothe)
    async removeClothe(@Args('id', { type: () => Int }) id: number) {
        const removeData = await this.clothesService.findOne(id);
        await this.clothesService.remove(id);
        return removeData;
    }
}
