import { CreateClotheInput } from './create-clothe.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClotheInput extends PartialType(CreateClotheInput) {
    @Field(() => Int)
    id: number;
}
