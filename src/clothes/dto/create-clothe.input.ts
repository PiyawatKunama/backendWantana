import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClotheInput {
    @Field({ nullable: true })
    id: number;

    @Field(() => Int)
    typeClotheId: number;

    @Field(() => Int)
    sortClotheId: number;
}
