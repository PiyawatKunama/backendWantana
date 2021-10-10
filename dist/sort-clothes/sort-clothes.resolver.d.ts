import { SortClothesService } from './sort-clothes.service';
import { SortClothe } from './entities/sort-clothe.entity';
import { CreateSortClotheInput } from './dto/create-sort-clothe.input';
import { UpdateSortClotheInput } from './dto/update-sort-clothe.input';
export declare class SortClothesResolver {
    private readonly sortClothesService;
    constructor(sortClothesService: SortClothesService);
    createSortClothe(
        createSortClotheInput: CreateSortClotheInput,
    ): Promise<SortClothe>;
    findAll(): Promise<SortClothe[]>;
    findOne(id: number): Promise<SortClothe>;
    updateSortClothe(
        updateSortClotheInput: UpdateSortClotheInput,
    ): Promise<SortClothe>;
    removeSortClothe(id: number): Promise<SortClothe>;
}
