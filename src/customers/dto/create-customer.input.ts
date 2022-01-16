import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
    @Field()
    idCard: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    address: string;

    @Field()
    phoneNumber: string;


    @Field()
    email: string;

    
}
