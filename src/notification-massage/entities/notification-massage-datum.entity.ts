import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Customer } from 'src/customers/entities/customer.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
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

    @Column({ nullable: true })
    @Field(() => Int, { nullable: true })
    public customerId: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    @Field()
    public created_at: Date;

    @OneToOne(() => Customer, (customer) => customer.notification_massage_datum)
    @Field(() => Customer)
    @JoinColumn({ name: 'customerId' })
    customer: Customer;
}
