import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSpecialClotheInput } from './create-special-clothe.input';

@InputType()
export class UpdateSpecialClotheInput extends PartialType(CreateSpecialClotheInput) {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;
}
