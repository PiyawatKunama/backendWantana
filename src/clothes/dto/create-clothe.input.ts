import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClotheInput {
    @Field(() => Int, { nullable: true })
    typeClotheId: number;

    @Field(() => Int, { nullable: true })
    sortClotheId: number;

    @Field(() => Int, { nullable: true })
    specialClothId: number;

    @Field(() => Int)
    orderId: number;
}
