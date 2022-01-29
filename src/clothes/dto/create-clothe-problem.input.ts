import { InputType, Field, Int } from '@nestjs/graphql';
import { Status } from 'src/global/enum/status';

@InputType()
export class CreateClotheProblemInput {
    @Field(() => Status)
    status: Status;

    @Field(() => [Int])
    clotheIds: number[];

    @Field(() => Int)
    problemClothes: number;
}
