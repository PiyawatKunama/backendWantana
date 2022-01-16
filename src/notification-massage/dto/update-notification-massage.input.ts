import { CreateNotificationMassageInput } from './create-notification-massage.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '../enum/status';

@InputType()
export class UpdateNotificationMassageInput extends PartialType(
    CreateNotificationMassageInput,
) {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    key?: string;

    @Field()
    status?: Status;

    @Field({ nullable: true })
    Massage: string;
}
