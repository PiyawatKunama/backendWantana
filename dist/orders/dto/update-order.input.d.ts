import { Status } from 'src/global/enum/status';
export declare class UpdateOrderInput {
    id: number;
    status?: Status;
    isOutProcess?: boolean;
}
