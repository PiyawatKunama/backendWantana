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

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'wantana',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    CustomersModule,
    EmployeesModule,
    ClothesModule,
    SortClothesModule,
    TypeClothesModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
