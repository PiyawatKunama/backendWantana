import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FilterClotheInput {
    @Field({ nullable: true })
    typeName?: string;

    @Field({ nullable: true })
    sortName?: string;

    @Field({ nullable: true })
    spacialName?: string;

    @Field(() => Boolean, { nullable: true })
    haveProblems?: boolean;
}
