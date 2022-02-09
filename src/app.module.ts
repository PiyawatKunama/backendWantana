import { ProblemClothesModule } from './problem-clothes/problem-clothes.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { ClothesModule } from './clothes/clothes.module';
import { SortClothesModule } from './sort-clothes/sort-clothes.module';
import { TypeClothesModule } from './type-clothes/type-clothes.module';
import { OrdersModule } from './orders/orders.module';
import { NotificationMassageModule } from './notification-massage/notification-massage.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'us-cdbr-east-04.cleardb.com',
            port: 3306,
            username: 'b1a623a0292efa',
            password: '0b7a7510',
            database: 'heroku_e6a785bcde0c62a',
            entities: ['dist/**/**.entity{.ts,.js}'],
            synchronize: true,
        }),
        // TypeOrmModule.forRoot({
        //     type: 'mysql',
        //     host: '127.0.0.1',
        //     port: 3306,
        //     username: 'root',
        //     password: '',
        //     database: 'wantana',
        //     entities: ['dist/**/**.entity{.ts,.js}'],
        //     synchronize: true,
        // }),
        CustomersModule,
        EmployeesModule,
        ClothesModule,
        SortClothesModule,
        TypeClothesModule,
        ProblemClothesModule,
        OrdersModule,
        NotificationMassageModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
