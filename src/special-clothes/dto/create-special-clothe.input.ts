import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpecialClotheInput {
    @Field()
    name: string;
}
