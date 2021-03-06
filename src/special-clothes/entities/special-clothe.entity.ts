import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Clothe } from 'src/clothes/entities/clothe.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class SpecialClothe {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column({ nullable: true })
    @Field({ nullable: true })
    key?: string;

    @Column()
    @Field()
    name: string;

    @Column({ default: false })
    @Field(() => Boolean)
    isDisable: boolean;

    @OneToMany(() => Clothe, (clothe) => clothe.specialClothe)
    @Field(() => [Clothe], { nullable: true })
    clothes: Clothe[];
}
