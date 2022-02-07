import { CreateSortClotheInput } from './create-sort-clothe.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSortClotheInput extends PartialType(CreateSortClotheInput) {
    @Field(() => Int)
    id: number;

    @Field()
    name: string;

    @Field(() => Boolean, { nullable: true })
    isDisable: boolean;
}
