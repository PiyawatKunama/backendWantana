import { InputType, Int, Field } from '@nestjs/graphql';
import { Role } from '../enums/role';

@InputType()
export class CreateEmployeeInput {
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

    @Field()
    password: string;

    @Field(() => Role)
    role: Role;
}
