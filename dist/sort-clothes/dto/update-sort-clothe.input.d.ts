import { CreateSortClotheInput } from './create-sort-clothe.input';
declare const UpdateSortClotheInput_base: import('@nestjs/common').Type<
    Partial<CreateSortClotheInput>
>;
export declare class UpdateSortClotheInput extends UpdateSortClotheInput_base {
    id: number;
    name: string;
}
export {};
