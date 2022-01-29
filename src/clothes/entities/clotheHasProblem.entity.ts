import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from 'src/global/enum/status';
import { ProblemClothe } from 'src/problem-clothes/entities/problem-clothe.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Clothe } from './clothe.entity';

@Entity()
@ObjectType()
export class ClotheHasProblem {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number;

    @Column()
    @Field(() => Status)
    status: Status;

    @ManyToOne(() => Clothe, (clothe) => clothe.clotheHasProblems, {
        onDelete: 'CASCADE',
    })
    @Field(() => Clothe)
    clothe: Clothe;

    @ManyToOne(() => ProblemClothe, (clothe) => clothe.clotheHasProblems, {
        onDelete: 'CASCADE',
    })
    @Field(() => ProblemClothe)
    problemClothe: ProblemClothe;
}
