import { DefectiveClothService } from './defective-cloth.service';
import { CreateDefectiveClothInput } from './dto/create-defective-cloth.input';
import { UpdateDefectiveClothInput } from './dto/update-defective-cloth.input';
export declare class DefectiveClothResolver {
    private readonly defectiveClothService;
    constructor(defectiveClothService: DefectiveClothService);
    createDefectiveCloth(createDefectiveClothInput: CreateDefectiveClothInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateDefectiveCloth(updateDefectiveClothInput: UpdateDefectiveClothInput): string;
    removeDefectiveCloth(id: number): string;
}
