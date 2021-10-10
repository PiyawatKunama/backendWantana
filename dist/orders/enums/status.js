'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Status = void 0;
const graphql_1 = require('@nestjs/graphql');
var Status;
(function (Status) {
    Status[(Status['STATUS_DEFAULT'] = 0)] = 'STATUS_DEFAULT';
    Status[(Status['STATUS_ONE'] = 1)] = 'STATUS_ONE';
    Status[(Status['STATUS_TWO'] = 2)] = 'STATUS_TWO';
})((Status = exports.Status || (exports.Status = {})));
(0, graphql_1.registerEnumType)(Status, {
    name: 'status',
});
//# sourceMappingURL=status.js.map
