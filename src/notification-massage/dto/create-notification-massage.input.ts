import { InputType, Field } from '@nestjs/graphql';
import { Status } from 'src/global/enum/status';

@InputType()
export class CreateNotificationMassageInput {
    @Field(() => Status)
    status?: Status;

    @Field({ nullable: true })
    Massage: string;
}
