import { forwardRef, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { EmployeesModule } from 'src/employees/employees.module';
import { CustomersModule } from 'src/customers/customers.module';
import { ClothesModule } from 'src/clothes/clothes.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Order]),
        EmployeesModule,
        CustomersModule,
        forwardRef(() => ClothesModule),
    ],
    exports: [OrdersService],
    providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
