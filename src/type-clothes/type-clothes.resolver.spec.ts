import { Test, TestingModule } from '@nestjs/testing';
import { TypeClothesResolver } from './type-clothes.resolver';
import { TypeClothesService } from './type-clothes.service';

describe('TypeClothesResolver', () => {
    let resolver: TypeClothesResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TypeClothesResolver, TypeClothesService],
        }).compile();

        resolver = module.get<TypeClothesResolver>(TypeClothesResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
