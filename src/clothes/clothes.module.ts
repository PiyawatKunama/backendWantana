import { SpecialClothesModule } from './../special-clothes/special-clothes.module';
import { forwardRef, Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesResolver } from './clothes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clothe } from './entities/clothe.entity';
import { TypeClothesModule } from 'src/type-clothes/type-clothes.module';
import { SortClothesModule } from 'src/sort-clothes/sort-clothes.module';
import { OrdersModule } from 'src/orders/orders.module';
import { ClotheHasProblem } from './entities/clotheHasProblem.entity';
import { ProblemClothesModule } from 'src/problem-clothes/problem-clothes.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Clothe, ClotheHasProblem]),
        TypeClothesModule,
        SortClothesModule,
        SpecialClothesModule,
        ProblemClothesModule,
        forwardRef(() => OrdersModule),
    ],
    providers: [ClothesResolver, ClothesService],
    exports: [ClothesService],
})
export class ClothesModule {}
