import { ObjectType, Field, Int } from '@nestjs/graphql';
import { NotificationMassageDatum } from 'src/notification-massage/entities/notification-massage-datum.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Customer {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ nullable: true })
    @Field({ nullable: true })
    key?: string;

    @Column()
    @Field()
    idCard: string;

    @Column()
    @Field()
    firstName: string;

    @Column()
    @Field()
    lastName: string;

    @Column()
    @Field()
    address: string;

    @Column()
    @Field()
    phoneNumber: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
    lineUserId: string;

    @Column()
    @Field()
    email: string;

    @OneToMany(() => Order, (order) => order.customer)
    @Field(() => [Order], { nullable: true })
    orders: Order[];

    @OneToMany(
        () => NotificationMassageDatum,
        (notification_massage_datum) => notification_massage_datum.customer,
    )
    @Field(() => [NotificationMassageDatum])
    notification_massage_datums: NotificationMassageDatum[];

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    @Field()
    public created_at: Date;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    @Field()
    public updated_at: Date;
}
