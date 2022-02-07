import { CreateTypeClotheInput } from './create-type-clothe.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTypeClotheInput extends PartialType(CreateTypeClotheInput) {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    name: string;

    @Field(() => Boolean, { nullable: true })
    isDisable: boolean;
}
