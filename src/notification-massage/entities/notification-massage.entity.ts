import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from '../enum/status';

@Entity()
@ObjectType()
export class NotificationMassage {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ nullable: true })
    @Field({ nullable: true })
    key?: string;

    @Column()
    @Field()
    status?: Status;

    @Column({ nullable: true })
    @Field({ nullable: true })
    Massage: string;
}
