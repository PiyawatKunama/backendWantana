import { InputType, Field } from '@nestjs/graphql';
import { Status } from 'src/global/enum/status';

@InputType()
export class FilterInput {
    @Field({ nullable: true })
    typeName?: string;

    @Field({ nullable: true })
    sortName?: string;

    @Field({ nullable: true })
    spacialName?: string;

    @Field({ nullable: true })
    customerName?: string;

    @Field(() => Boolean, { nullable: true })
    haveProblems?: boolean;

    @Field(() => Boolean, { nullable: true })
    isProcess?: boolean;

    @Field({ nullable: true })
    firstDate?: Date;

    @Field({ nullable: true })
    lastDate?: Date;

    @Field(() => Status, { nullable: true })
    status?: Status;
}
