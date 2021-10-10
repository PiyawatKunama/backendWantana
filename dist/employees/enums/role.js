'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Role = void 0;
const graphql_1 = require('@nestjs/graphql');
var Role;
(function (Role) {
  Role[(Role['ADMIN'] = 0)] = 'ADMIN';
  Role[(Role['SUB_ADMIN'] = 1)] = 'SUB_ADMIN';
})((Role = exports.Role || (exports.Role = {})));
(0, graphql_1.registerEnumType)(Role, {
  name: 'role',
});
//# sourceMappingURL=role.js.map
