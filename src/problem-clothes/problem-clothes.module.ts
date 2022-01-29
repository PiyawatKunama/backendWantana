import { Module } from '@nestjs/common';
import { ProblemClothesService } from './problem-clothes.service';
import { ProblemClothesResolver } from './problem-clothes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemClothe } from './entities/problem-clothe.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProblemClothe])],
    providers: [ProblemClothesResolver, ProblemClothesService],
    exports: [ProblemClothesService],
})
export class ProblemClothesModule {}
