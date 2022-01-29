import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateClotheInput {
    @Field(() => [Int])
    ids: number[];

    @Field(() => Int)
    orderId: number;
}
