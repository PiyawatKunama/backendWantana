import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Clothe } from 'src/clothes/entities/clothe.entity';
import { ClotheHasProblem } from 'src/clothes/entities/clotheHasProblem.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProblemClothe {
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

    @OneToMany(() => Clothe, (clothe) => clothe.typeClothe)
    @Field(() => [Clothe], { nullable: true })
    clothes: Clothe[];

    @OneToMany(
        () => ClotheHasProblem,
        (clotheHasProblems) => clotheHasProblems.problemClothe,
        {
            onDelete: 'CASCADE',
        },
    )
    @Field(() => [ClotheHasProblem])
    clotheHasProblems: ClotheHasProblem;
}
