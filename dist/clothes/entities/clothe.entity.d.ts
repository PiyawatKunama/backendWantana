import { ProblemClothe } from './../../problem-clothes/entities/problem-clothe.entity';
import { Order } from 'src/orders/entities/order.entity';
import { SortClothe } from 'src/sort-clothes/entities/sort-clothe.entity';
import { TypeClothe } from 'src/type-clothes/entities/type-clothe.entity';
import { SpecialClothe } from 'src/special-clothes/entities/special-clothe.entity';
export declare class Clothe {
    id: number;
    key?: string;
    created_at: Date;
    updated_at: Date;
    typeClothe: TypeClothe;
    sortClothe: SortClothe;
    problemClothe: ProblemClothe;
    specialClothe: SpecialClothe;
    orders: Order[];
    beforeInsertActions(): void;
}
