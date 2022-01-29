import { Module } from '@nestjs/common';
import { SpecialClothesService } from './special-clothes.service';
import { SpecialClothesResolver } from './special-clothes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialClothe } from './entities/special-clothe.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SpecialClothe])],
    providers: [SpecialClothesResolver, SpecialClothesService],
    exports: [SpecialClothesService],
})
export class SpecialClothesModule {}
