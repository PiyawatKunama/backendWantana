import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { ClothesModule } from 'src/clothes/clothes.module';
import { EmployeesModule } from 'src/employees/employees.module';
import { CustomersModule } from 'src/customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    ClothesModule,
    EmployeesModule,
    CustomersModule,
  ],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
