import { ClothesService } from './clothes.service';
import { Clothe } from './entities/clothe.entity';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';
import { CreateClotheProblemInput } from './dto/create-clothe-problem.input';
import { FilterClotheInput } from './dto/filter.input';
export declare class ClothesResolver {
    private readonly clothesService;
    constructor(clothesService: ClothesService);
    createClothe(createClotheInput: CreateClotheInput): Promise<Clothe>;
    createClotheHasProblem(createClotheProblemInput: CreateClotheProblemInput): Promise<string>;
    findAll(): Promise<Clothe[]>;
    findOne(id: number): Promise<Clothe>;
    filterClothe(filterInput: FilterClotheInput): Promise<any>;
    updateClothe(updateClotheInput: UpdateClotheInput): Promise<string>;
    removeClothe(id: number): Promise<Clothe>;
}
