import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Customer {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

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
}
