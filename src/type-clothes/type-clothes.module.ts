import { Module } from '@nestjs/common';
import { TypeClothesService } from './type-clothes.service';
import { TypeClothesResolver } from './type-clothes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeClothe } from './entities/type-clothe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeClothe])],
  providers: [TypeClothesResolver, TypeClothesService],
  exports: [TypeClothesService],
})
export class TypeClothesModule {}
