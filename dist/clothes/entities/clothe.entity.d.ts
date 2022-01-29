import { Order } from 'src/orders/entities/order.entity';
import { SortClothe } from 'src/sort-clothes/entities/sort-clothe.entity';
import { TypeClothe } from 'src/type-clothes/entities/type-clothe.entity';
import { SpecialClothe } from 'src/special-clothes/entities/special-clothe.entity';
import { ClotheHasProblem } from './clotheHasProblem.entity';
export declare class Clothe {
    id: number;
    key?: string;
    typeClotheId: number;
    sortClotheId: number;
    specialClotheId: number;
    orderId: number;
    typeClothe: TypeClothe;
    sortClothe: SortClothe;
    clotheHasProblems: ClotheHasProblem;
    specialClothe: SpecialClothe;
    order: Order;
    created_at: Date;
    updated_at: Date;
    beforeInsertActions(): void;
}
