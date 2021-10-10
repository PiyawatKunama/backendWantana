import { CreateDefectiveClothInput } from './dto/create-defective-cloth.input';
import { UpdateDefectiveClothInput } from './dto/update-defective-cloth.input';
export declare class DefectiveClothService {
    create(createDefectiveClothInput: CreateDefectiveClothInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDefectiveClothInput: UpdateDefectiveClothInput): string;
    remove(id: number): string;
}
