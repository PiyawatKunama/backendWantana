import { ClothesService } from './clothes.service';
import { Clothe } from './entities/clothe.entity';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';
export declare class ClothesResolver {
    private readonly clothesService;
    constructor(clothesService: ClothesService);
    createClothe(createClotheInput: CreateClotheInput): Promise<Clothe>;
    findAll(): Promise<Clothe[]>;
    findOne(id: number): Promise<Clothe>;
    updateClothe(updateClotheInput: UpdateClotheInput): string;
    removeClothe(id: number): Promise<Clothe>;
}
