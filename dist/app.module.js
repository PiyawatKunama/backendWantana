"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const customers_module_1 = require("./customers/customers.module");
const employees_module_1 = require("./employees/employees.module");
const clothes_module_1 = require("./clothes/clothes.module");
const sort_clothes_module_1 = require("./sort-clothes/sort-clothes.module");
const type_clothes_module_1 = require("./type-clothes/type-clothes.module");
const orders_module_1 = require("./orders/orders.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'us-cdbr-east-04.cleardb.com',
                port: 3306,
                username: 'b1a623a0292efa',
                password: '0b7a7510',
                database: 'heroku_e6a785bcde0c62a',
                entities: ['dist/**/**.entity{.ts,.js}'],
                synchronize: true,
            }),
            customers_module_1.CustomersModule,
            employees_module_1.EmployeesModule,
            clothes_module_1.ClothesModule,
            sort_clothes_module_1.SortClothesModule,
            type_clothes_module_1.TypeClothesModule,
            orders_module_1.OrdersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map