import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import generateKey from 'src/global/generateKey';
import { Repository } from 'typeorm';
import { CreateSortClotheInput } from './dto/create-sort-clothe.input';
import { UpdateSortClotheInput } from './dto/update-sort-clothe.input';
import { SortClothe } from './entities/sort-clothe.entity';

@Injectable()
export class SortClothesService {
    constructor(
        @InjectRepository(SortClothe)
        private sortClothesRepository: Repository<SortClothe>,
    ) {}

    async create(createSortClotheInput: CreateSortClotheInput) {
        const newSortClothe =
            this.sortClothesRepository.create(createSortClotheInput);
        const findLastRecord = await this.sortClothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        newSortClothe.key = generateKey(findLastRecord, 'SC');

        return await this.sortClothesRepository.save(newSortClothe);
    }

    async findAll(): Promise<SortClothe[]> {
        return await this.sortClothesRepository.find({
            relations: ['clothes'],
        });
    }

    async findOne(id: number): Promise<SortClothe> {
        return await this.sortClothesRepository.findOneOrFail(id, {
            relations: ['clothes'],
        });
    }

    async update(id: number, updateSortClotheInput: UpdateSortClotheInput) {
        const updateSortClothe =
            this.sortClothesRepository.create(updateSortClotheInput);
        return await this.sortClothesRepository.update(id, updateSortClothe);
    }

    async remove(id: number) {
        return this.sortClothesRepository.delete(id);
    }
}
