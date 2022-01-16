import { registerEnumType } from '@nestjs/graphql';

export enum Status {
    IN,
    OUT,
}
registerEnumType(Status, {
    name: 'status',
});
