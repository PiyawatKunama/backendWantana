import { InputType, Int, Field } from '@nestjs/graphql';
import { Role } from '../enums/role';

@InputType()
export class CreateEmployeeInput {
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

    @Field()
    email: string;

    @Field()
    password: string;

    @Field(() => Role)
    role: Role;
}
