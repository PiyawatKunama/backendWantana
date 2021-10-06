import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import { SortClothe } from 'src/sort-clothes/entities/sort-clothe.entity';
import { TypeClothe } from 'src/type-clothes/entities/type-clothe.entity';
import {
  BeforeInsert,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Clothe {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

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

  @ManyToOne(() => TypeClothe, (typeClothe) => typeClothe.clothes, {
    onDelete: 'CASCADE',
  })
  @Field(() => TypeClothe)
  typeClothe: TypeClothe;

  @ManyToOne(() => SortClothe, (sortClothe) => sortClothe.clothes, {
    onDelete: 'CASCADE',
  })
  @Field(() => SortClothe)
  sortClothe: SortClothe;

  @ManyToMany(() => Order, (order) => order.clothes)
  @JoinTable({
    name: 'order_details',
  })
  @Field(() => [Order])
  orders: Order[];

  @BeforeInsert()
  beforeInsertActions() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}
