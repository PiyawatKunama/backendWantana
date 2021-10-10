import { registerEnumType } from '@nestjs/graphql';

export enum Status {
    STATUS_DEFAULT,
    STATUS_ONE,
    STATUS_TWO,
}
registerEnumType(Status, {
    name: 'status',
});
