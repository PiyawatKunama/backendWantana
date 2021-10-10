import { Module } from '@nestjs/common';
import { SortClothesService } from './sort-clothes.service';
import { SortClothesResolver } from './sort-clothes.resolver';
import { SortClothe } from './entities/sort-clothe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([SortClothe])],
    providers: [SortClothesResolver, SortClothesService],
    exports: [SortClothesService],
})
export class SortClothesModule {}
