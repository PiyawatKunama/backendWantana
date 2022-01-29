import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
    @Field(() => Int)
    employeeId: number;

    @Field(() => Int)
    customerId: number;

    @Field(() => Int, { nullable: true })
    primaryOrderId: number;
}
