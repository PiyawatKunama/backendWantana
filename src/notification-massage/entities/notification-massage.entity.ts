import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from 'src/global/enum/status';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class NotificationMassage {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ nullable: true })
    @Field({ nullable: true })
    key?: string;

    @Column({ nullable: true })
    @Field(() => Status, { nullable: true })
    status: Status;

    @Column({ nullable: true })
    @Field({ nullable: true })
    Massage: string;
}
