import { CreateCustomerInput } from './create-customer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  idCard: number;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  address: string;

  @Field(() => Int, { nullable: true })
  phoneNumber: number;

  @Field(() => Int, { nullable: true })
  lineId: number;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;
}
