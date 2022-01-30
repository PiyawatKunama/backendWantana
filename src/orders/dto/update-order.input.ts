import { InputType, Field, Int } from '@nestjs/graphql';
import { Status } from 'src/global/enum/status';

@InputType()
export class UpdateOrderInput {
    @Field(() => Int)
    id: number;

    @Field(() => Status, { nullable: true })
    status?: Status;

    @Field(() => Boolean, { nullable: true })
    isOutProcess?: boolean;
}
