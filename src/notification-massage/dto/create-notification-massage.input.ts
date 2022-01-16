import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '../enum/status';

@InputType()
export class CreateNotificationMassageInput {
    @Field({ nullable: true })
    key?: string;

    @Field()
    status?: Status;

    @Field({ nullable: true })
    Massage: string;
}
