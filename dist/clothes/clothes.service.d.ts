import { ProblemClothesService } from './../problem-clothes/problem-clothes.service';
import { SortClothesService } from 'src/sort-clothes/sort-clothes.service';
import { TypeClothesService } from 'src/type-clothes/type-clothes.service';
import { Repository } from 'typeorm';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';
import { Clothe } from './entities/clothe.entity';
import { SpecialClothesService } from 'src/special-clothes/special-clothes.service';
import { OrdersService } from 'src/orders/orders.service';
import { CreateClotheProblemInput } from './dto/create-clothe-problem.input';
import { ClotheHasProblem } from './entities/clotheHasProblem.entity';
export declare class ClothesService {
    private clothesRepository;
    private clotheHasProblemsRepository;
    private typeClothesService;
    private sortClothesService;
    private problemClothesService;
    private specialClothesService;
    private ordersService;
    constructor(clothesRepository: Repository<Clothe>, clotheHasProblemsRepository: Repository<ClotheHasProblem>, typeClothesService: TypeClothesService, sortClothesService: SortClothesService, problemClothesService: ProblemClothesService, specialClothesService: SpecialClothesService, ordersService: OrdersService);
    createClotheHasProblem(createClotheProblem: CreateClotheProblemInput): Promise<void>;
    create(createClotheInput: CreateClotheInput): Promise<Clothe>;
    findAll(): Promise<Clothe[]>;
    findOne(id: number): Promise<Clothe>;
    update(ids: number[], updateClotheInput: UpdateClotheInput): void;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
