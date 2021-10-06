import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Clothe } from 'src/clothes/entities/clothe.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Status } from '../enums/status';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  status: string;

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

  @ManyToMany(() => Clothe, (clothe) => clothe.orders)
  @Field(() => [Clothe])
  clothes: Clothe[];

  @ManyToOne(() => Employee, (employee) => employee.orders, {
    onDelete: 'CASCADE',
  })
  @Field(() => Employee)
  employee: Employee;

  @ManyToOne(() => Customer, (customer) => customer.orders, {
    onDelete: 'CASCADE',
  })
  @Field(() => Customer)
  customer: Customer;

  @BeforeInsert()
  beforeInsertActions() {
    this.created_at = new Date();
    this.updated_at = new Date();
    this.status = 'STATUS_DEFAULT';
  }
}
