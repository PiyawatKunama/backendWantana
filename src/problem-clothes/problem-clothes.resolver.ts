import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProblemClothesService } from './problem-clothes.service';
import { ProblemClothe } from './entities/problem-clothe.entity';
import { CreateProblemClotheInput } from './dto/create-problem-clothe.input';
import { UpdateProblemClotheInput } from './dto/update-problem-clothe.input';

@Resolver(() => ProblemClothe)
export class ProblemClothesResolver {
    constructor(private readonly problemClothesService: ProblemClothesService) {}

    @Mutation(() => ProblemClothe)
    createProblemClothe(
        @Args('createProblemClotheInput')
        createProblemClotheInput: CreateProblemClotheInput,
    ) {
        return this.problemClothesService.create(createProblemClotheInput);
    }

    @Query(() => [ProblemClothe], { name: 'problemClothes' })
    findAll() {
        return this.problemClothesService.findAll();
    }

    @Query(() => ProblemClothe, { name: 'problemClothe' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.problemClothesService.findOne(id);
    }

    @Mutation(() => ProblemClothe)
    async updateProblemClothe(
        @Args('updateProblemClotheInput')
        updateProblemClotheInput: UpdateProblemClotheInput,
    ) {
        await this.problemClothesService.update(
            updateProblemClotheInput.id,
            updateProblemClotheInput,
        );
        return await this.problemClothesService.findOne(updateProblemClotheInput.id);
    }

    @Mutation(() => ProblemClothe)
    async removeProblemClothe(@Args('id', { type: () => Int }) id: number) {
        const removeProblemClothe = await this.problemClothesService.findOne(id);
        await this.problemClothesService.remove(id);
        return removeProblemClothe;
    }
}
