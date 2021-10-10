import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    ADMIN,
    SUB_ADMIN,
}
registerEnumType(Role, {
    name: 'role',
});
