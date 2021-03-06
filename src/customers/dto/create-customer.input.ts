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
    address: string; //Street Name, Building, House No.

    @Field()
    proVince: string;

    @Field()
    disTrict: string;

    @Field()
    subDistrict: string;

    @Field(() => Int)
    postalCode: number;

    @Field()
    phoneNumber: string;


    @Field()
    email: string;

    
}
