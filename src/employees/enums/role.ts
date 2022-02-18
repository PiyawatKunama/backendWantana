import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    HEAD_ADMIN,
    ADMIN,
    SUB_ADMIN,
}
registerEnumType(Role, {
    name: 'role',
});
