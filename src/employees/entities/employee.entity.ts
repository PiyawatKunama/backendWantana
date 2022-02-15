import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../enums/role';

@Entity()
@ObjectType()
export class Employee {
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

    @Column()
    @Field()
    email: string;

    @Column()
    @Field()
    password: string;

    @Column()
    @Field(() => Role)
    role: Role;

    @OneToMany(() => Order, (order) => order.employee)
    @Field(() => [Order], { nullable: true })
    orders: Order[];

    @Column({ default: null })
    @Field(() => Date, { nullable: true })
    deleted_at: Date;

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
