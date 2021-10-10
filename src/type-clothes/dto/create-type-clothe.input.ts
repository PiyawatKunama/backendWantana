import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTypeClotheInput {
    @Field()
    name: string;
}
