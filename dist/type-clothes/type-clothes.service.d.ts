import { Repository } from 'typeorm';
import { CreateTypeClotheInput } from './dto/create-type-clothe.input';
import { UpdateTypeClotheInput } from './dto/update-type-clothe.input';
import { TypeClothe } from './entities/type-clothe.entity';
export declare class TypeClothesService {
    private typeClothesRepository;
    constructor(typeClothesRepository: Repository<TypeClothe>);
    create(createTypeClotheInput: CreateTypeClotheInput): Promise<TypeClothe>;
    findAll(): Promise<TypeClothe[]>;
    findOne(id: number): Promise<TypeClothe>;
    update(
        id: number,
        updateTypeClotheInput: UpdateTypeClotheInput,
    ): Promise<import('typeorm').UpdateResult>;
    remove(id: number): Promise<import('typeorm').DeleteResult>;
}
