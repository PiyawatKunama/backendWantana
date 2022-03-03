import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Role } from '../enums/role';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
    @Field(() => Int, { nullable: true })
    id: number;

    @Field({ nullable: true })
    idCard: string;

    @Field({ nullable: true })
    firstName: string;

    @Field({ nullable: true })
    lastName: string;

    @Field({ nullable: true })
    houseNo: string;

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
    password: string;

    @Field(() => Role, { nullable: true })
    role: Role;
}
