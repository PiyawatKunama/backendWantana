import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Role } from '../enums/role';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
    @Field(() => Int, { nullable: true })
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

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    password: string;

    @Field(() => Role, { nullable: true })
    role: Role;
}
