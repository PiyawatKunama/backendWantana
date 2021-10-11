import { TypeClothesService } from './type-clothes.service';
import { TypeClothe } from './entities/type-clothe.entity';
import { CreateTypeClotheInput } from './dto/create-type-clothe.input';
import { UpdateTypeClotheInput } from './dto/update-type-clothe.input';
export declare class TypeClothesResolver {
    private readonly typeClothesService;
    constructor(typeClothesService: TypeClothesService);
    createTypeClothe(createTypeClotheInput: CreateTypeClotheInput): Promise<TypeClothe>;
    findAll(): Promise<TypeClothe[]>;
    findOne(id: number): Promise<TypeClothe>;
    updateTypeClothe(updateTypeClotheInput: UpdateTypeClotheInput): Promise<TypeClothe>;
    removeTypeClothe(id: number): Promise<TypeClothe>;
}
