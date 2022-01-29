import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateProblemClotheInput } from './create-problem-clothe.input';

@InputType()
export class UpdateProblemClotheInput extends PartialType(CreateProblemClotheInput) {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;
}
