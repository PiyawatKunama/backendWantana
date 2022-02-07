import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Customer } from 'src/customers/entities/customer.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class NotificationMassageDatum {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ nullable: true })
    @Field({ nullable: true })
    Massage: string;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    @Field()
    public created_at: Date;

    @ManyToOne(() => Customer, (customer) => customer.notification_massage_datums)
    @Field(() => Customer)
    customer: Customer;
}
