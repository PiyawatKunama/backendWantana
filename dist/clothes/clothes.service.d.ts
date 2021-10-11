import { SortClothesService } from 'src/sort-clothes/sort-clothes.service';
import { TypeClothesService } from 'src/type-clothes/type-clothes.service';
import { Repository } from 'typeorm';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';
import { Clothe } from './entities/clothe.entity';
export declare class ClothesService {
    private clothesRepository;
    private typeClothesService;
    private sortClothesService;
    constructor(clothesRepository: Repository<Clothe>, typeClothesService: TypeClothesService, sortClothesService: SortClothesService);
    create(createClotheInput: CreateClotheInput): Promise<Clothe>;
    findAll(): Promise<Clothe[]>;
    findOne(id: number): Promise<Clothe>;
    update(id: number, updateClotheInput: UpdateClotheInput): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
