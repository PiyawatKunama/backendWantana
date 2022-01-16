import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import generateKey from 'src/global/generateKey';
import { SortClothesService } from 'src/sort-clothes/sort-clothes.service';
import { TypeClothesService } from 'src/type-clothes/type-clothes.service';
import { Entity, Repository } from 'typeorm';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';
import { Clothe } from './entities/clothe.entity';
import { Relations } from './relations';

@Entity()
@Injectable()
export class ClothesService {
    constructor(
        @InjectRepository(Clothe)
        private clothesRepository: Repository<Clothe>,
        private typeClothesService: TypeClothesService,
        private sortClothesService: SortClothesService,
    ) {}

    async create(createClotheInput: CreateClotheInput) {
        const newClothe = this.clothesRepository.create(createClotheInput);

        const typeClothe = await this.typeClothesService.findOne(
            createClotheInput.typeClotheId,
        );
        newClothe.typeClothe = typeClothe;

        const sortClothe = await this.sortClothesService.findOne(
            createClotheInput.sortClotheId,
        );
        newClothe.sortClothe = sortClothe;

        const findLastRecord = await this.clothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        newClothe.key = generateKey(findLastRecord, 'CL');

        return await this.clothesRepository.save(newClothe);
    }

    async findAll(): Promise<Clothe[]> {
        return await this.clothesRepository.find(Relations);
    }

    async findOne(id: number): Promise<Clothe> {
        return await this.clothesRepository.findOneOrFail(id, Relations);
    }

    async update(id: number, updateClotheInput: UpdateClotheInput) {
        const updateClothe = this.clothesRepository.create(updateClotheInput);
        return await this.clothesRepository.update(id, updateClothe);
    }

    async remove(id: number) {
        return await this.clothesRepository.delete(id);
    }
}
