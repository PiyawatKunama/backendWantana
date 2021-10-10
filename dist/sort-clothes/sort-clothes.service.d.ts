import { Repository } from 'typeorm';
import { CreateSortClotheInput } from './dto/create-sort-clothe.input';
import { UpdateSortClotheInput } from './dto/update-sort-clothe.input';
import { SortClothe } from './entities/sort-clothe.entity';
export declare class SortClothesService {
    private sortClothesRepository;
    constructor(sortClothesRepository: Repository<SortClothe>);
    create(createSortClotheInput: CreateSortClotheInput): Promise<SortClothe>;
    findAll(): Promise<SortClothe[]>;
    findOne(id: number): Promise<SortClothe>;
    update(
        id: number,
        updateSortClotheInput: UpdateSortClotheInput,
    ): Promise<import('typeorm').UpdateResult>;
    remove(id: number): Promise<import('typeorm').DeleteResult>;
}
