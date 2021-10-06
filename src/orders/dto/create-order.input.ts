import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '../enums/status';
import { IsEnum } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @Field({ nullable: true })
  id: number;

  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  role: Status;

  @Field(() => [Int])
  clotheIds: number[];

  @Field(() => Int)
  employeeId: number;

  @Field(() => Int)
  customerId: number;
}
