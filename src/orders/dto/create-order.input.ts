import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '../enums/status';

@InputType()
export class CreateOrderInput {
  @Field({ nullable: true })
  id: number;

  @Field(() => Status, { nullable: true })
  role: Status;

  @Field(() => [Int])
  clotheIds: number[];

  @Field(() => Int)
  employeeId: number;

  @Field(() => Int)
  customerId: number;
}
