import { CreateCustomerInput } from './create-customer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    idCard: string;

    @Field({ nullable: true })
    firstName: string;

    @Field({ nullable: true })
    lastName: string;

    @Field({ nullable: true })
    address: string;

    @Field({ nullable: true })
    proVince: string;

    @Field({ nullable: true })
    disTrict: string;

    @Field(() => Int)
    postalCode: number;

    @Field({ nullable: true })
    phoneNumber: string;

    @Field({ nullable: true })
    email: string;

    
    @Field({ nullable: true })
    lineUserId: string;
}
