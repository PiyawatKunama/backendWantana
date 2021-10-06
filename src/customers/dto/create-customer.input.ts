import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field(() => Int)
  idCard: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  address: string;

  @Field(() => Int)
  phoneNumber: number;

  @Field(() => Int)
  lineId: number;

  @Field()
  email: string;

  @Field()
  password: string;
}
