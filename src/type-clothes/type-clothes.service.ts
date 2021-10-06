import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeClotheInput } from './dto/create-type-clothe.input';
import { UpdateTypeClotheInput } from './dto/update-type-clothe.input';
import { TypeClothe } from './entities/type-clothe.entity';

@Injectable()
export class TypeClothesService {
  constructor(
    @InjectRepository(TypeClothe)
    private typeClothesRepository: Repository<TypeClothe>,
  ) {}

  async create(
    createTypeClotheInput: CreateTypeClotheInput,
  ): Promise<TypeClothe> {
    const newTypeClothe = this.typeClothesRepository.create(
      createTypeClotheInput,
    );
    return await this.typeClothesRepository.save(newTypeClothe);
  }

  async findAll(): Promise<TypeClothe[]> {
    return await this.typeClothesRepository.find({
      relations: ['clothes'],
    });
  }

  async findOne(id: number): Promise<TypeClothe> {
    return await this.typeClothesRepository.findOneOrFail(id, {
      relations: ['clothes'],
    });
  }

  async update(id: number, updateTypeClotheInput: UpdateTypeClotheInput) {
    const updateTypeClothe = this.typeClothesRepository.create(
      updateTypeClotheInput,
    );
    return await this.typeClothesRepository.update(id, updateTypeClothe);
  }

  async remove(id: number) {
    return await this.typeClothesRepository.delete(id);
  }
}
