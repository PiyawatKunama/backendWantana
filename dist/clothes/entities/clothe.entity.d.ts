import { Order } from 'src/orders/entities/order.entity';
import { SortClothe } from 'src/sort-clothes/entities/sort-clothe.entity';
import { TypeClothe } from 'src/type-clothes/entities/type-clothe.entity';
export declare class Clothe {
    id: number;
    key?: string;
    created_at: Date;
    updated_at: Date;
    typeClothe: TypeClothe;
    sortClothe: SortClothe;
    orders: Order[];
    beforeInsertActions(): void;
}
