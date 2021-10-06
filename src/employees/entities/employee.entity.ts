import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role';

@Entity()
@ObjectType()
export class Employee {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  idCard: number;

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
  @Field(() => Int)
  phoneNumber: number;

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
}
