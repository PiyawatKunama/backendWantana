import { SpecialClothesModule } from './../special-clothes/special-clothes.module';
import { ProblemClothesModule } from './../problem-clothes/problem-clothes.module';
import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesResolver } from './clothes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clothe } from './entities/clothe.entity';
import { TypeClothesModule } from 'src/type-clothes/type-clothes.module';
import { SortClothesModule } from 'src/sort-clothes/sort-clothes.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Clothe]),
        TypeClothesModule,
        SortClothesModule,
        ProblemClothesModule,
        SpecialClothesModule
    ],
    providers: [ClothesResolver, ClothesService],
    exports: [ClothesService],
})
export class ClothesModule {}
