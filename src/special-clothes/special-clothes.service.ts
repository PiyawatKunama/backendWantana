import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import generateKey from 'src/global/generateKey';
import { Repository } from 'typeorm';
import { CreateSpecialClotheInput } from './dto/create-special-clothe.input';
import { UpdateSpecialClotheInput } from './dto/update-special-clothe.input';
import { SpecialClothe } from './entities/special-clothe.entity';

@Injectable()
export class SpecialClothesService {
    constructor(
        @InjectRepository(SpecialClothe)
        private specialClothesRepository: Repository<SpecialClothe>,
    ) {}

    async create(
        createSpecialClotheInput: CreateSpecialClotheInput,
    ): Promise<SpecialClothe> {
        const newSpecialClothe = this.specialClothesRepository.create(
            createSpecialClotheInput,
        );

        const lastRecord = await this.specialClothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        newSpecialClothe.key = generateKey(lastRecord, 'SP');

        return await this.specialClothesRepository.save(newSpecialClothe);
    }

    async findAll(): Promise<SpecialClothe[]> {
        return await this.specialClothesRepository.find({
            relations: ['clothes'],
        });
    }

    async findOne(id: number): Promise<SpecialClothe> {
        return await this.specialClothesRepository.findOneOrFail(id, {
            relations: ['clothes'],
        });
    }

    async update(id: number, updateSpecialClotheInput: UpdateSpecialClotheInput) {
        const updateSpecialClothe = this.specialClothesRepository.create(
            updateSpecialClotheInput,
        );
        return await this.specialClothesRepository.update(id, updateSpecialClothe);
    }

    async remove(id: number) {
        return await this.specialClothesRepository.delete(id);
    }
}
