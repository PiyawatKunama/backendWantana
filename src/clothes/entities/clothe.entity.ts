import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import { SortClothe } from 'src/sort-clothes/entities/sort-clothe.entity';
import { TypeClothe } from 'src/type-clothes/entities/type-clothe.entity';
import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { SpecialClothe } from 'src/special-clothes/entities/special-clothe.entity';
import { ClotheHasProblem } from './clotheHasProblem.entity';

@Entity()
@ObjectType()
export class Clothe {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ nullable: true })
    @Field({ nullable: true })
    key?: string;

    @Column({ nullable: true })
    @Field(() => Int, { nullable: true })
    public typeClotheId: number;

    @Column({ nullable: true })
    @Field(() => Int, { nullable: true })
    public sortClotheId: number;

    @Column({ nullable: true })
    @Field(() => Int, { nullable: true })
    public specialClotheId: number;

    @Column()
    @Field(() => Int)
    public orderId: number;

    @ManyToOne(() => TypeClothe, (typeClothe) => typeClothe.clothes, {
        onDelete: 'CASCADE',
    })
    @Field(() => TypeClothe, { nullable: true })
    typeClothe: TypeClothe;

    @ManyToOne(() => SortClothe, (sortClothe) => sortClothe.clothes, {
        onDelete: 'CASCADE',
    })
    @Field(() => SortClothe, { nullable: true })
    sortClothe: SortClothe;

    @OneToMany(
        () => ClotheHasProblem,
        (clotheHasProblems) => clotheHasProblems.clothe,
        {
            onDelete: 'CASCADE',
        },
    )
    @Field(() => [ClotheHasProblem])
    clotheHasProblems: ClotheHasProblem;

    @ManyToOne(() => SpecialClothe, (SpecialClothe) => SpecialClothe.clothes, {
        onDelete: 'CASCADE',
    })
    @Field(() => SpecialClothe, { nullable: true })
    specialClothe: SpecialClothe;

    @ManyToOne(() => Order, (order) => order.clothes, {
        onDelete: 'CASCADE',
    })
    @Field(() => Order)
    order: Order;

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

    @BeforeInsert()
    beforeInsertActions() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
