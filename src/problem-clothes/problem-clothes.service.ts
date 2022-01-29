import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import generateKey from 'src/global/generateKey';
import { Repository } from 'typeorm';
import { CreateProblemClotheInput } from './dto/create-problem-clothe.input';
import { UpdateProblemClotheInput } from './dto/update-problem-clothe.input';
import { ProblemClothe } from './entities/problem-clothe.entity';

@Injectable()
export class ProblemClothesService {
    constructor(
        @InjectRepository(ProblemClothe)
        private problemClothesRepository: Repository<ProblemClothe>,
    ) {}

    async create(
        createProblemClotheInput: CreateProblemClotheInput,
    ): Promise<ProblemClothe> {
        const newProblemClothe = this.problemClothesRepository.create(
            createProblemClotheInput,
        );

        const findLastRecord = await this.problemClothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        newProblemClothe.key = generateKey(findLastRecord, 'PC');

        return await this.problemClothesRepository.save(newProblemClothe);
    }

    async findAll(): Promise<ProblemClothe[]> {
        return await this.problemClothesRepository.find({
            relations: ['clothes'],
        });
    }

    async findOne(id: number): Promise<ProblemClothe> {
        return await this.problemClothesRepository.findOneOrFail(id, {
            relations: ['clothes'],
        });
    }

    async update(id: number, updateProblemClotheInput: UpdateProblemClotheInput) {
        const updateProblemClothe = this.problemClothesRepository.create(
            updateProblemClotheInput,
        );
        return await this.problemClothesRepository.update(id, updateProblemClothe);
    }

    async remove(id: number) {
        return await this.problemClothesRepository.delete(id);
    }
}
