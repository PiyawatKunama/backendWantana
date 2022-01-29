import { ProblemClothesService } from './../problem-clothes/problem-clothes.service';
import { SortClothesService } from 'src/sort-clothes/sort-clothes.service';
import { TypeClothesService } from 'src/type-clothes/type-clothes.service';
import { Repository } from 'typeorm';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';
import { Clothe } from './entities/clothe.entity';
import { SpecialClothesService } from 'src/special-clothes/special-clothes.service';
export declare class ClothesService {
    private clothesRepository;
    private typeClothesService;
    private sortClothesService;
    private problemClothesService;
    private specialClothesService;
    constructor(clothesRepository: Repository<Clothe>, typeClothesService: TypeClothesService, sortClothesService: SortClothesService, problemClothesService: ProblemClothesService, specialClothesService: SpecialClothesService);
    create(createClotheInput: CreateClotheInput): Promise<Clothe>;
    findAll(): Promise<Clothe[]>;
    findOne(id: number): Promise<Clothe>;
    update(id: number, updateClotheInput: UpdateClotheInput): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
