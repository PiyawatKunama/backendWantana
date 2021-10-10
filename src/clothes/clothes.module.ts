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
    ],
    providers: [ClothesResolver, ClothesService],
    exports: [ClothesService],
})
export class ClothesModule {}
