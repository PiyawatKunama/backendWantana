import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Clothe } from 'src/clothes/entities/clothe.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Status } from 'src/global/enum/status';
import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Order {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ nullable: true })
    @Field({ nullable: true })
    key?: string;

    @Column()
    @Field(() => Int)
    primaryOrderId: number;

    @Column({ default: Status.IN })
    @Field(() => Status)
    status: Status;

    @Column({ default: false })
    @Field(() => Boolean)
    isOutProcess: boolean;

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

    @OneToMany(() => Clothe, (clothe) => clothe.order)
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
    }
}
