import { Test, TestingModule } from '@nestjs/testing';
import { SortClothesResolver } from './sort-clothes.resolver';
import { SortClothesService } from './sort-clothes.service';

describe('SortClothesResolver', () => {
  let resolver: SortClothesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortClothesResolver, SortClothesService],
    }).compile();

    resolver = module.get<SortClothesResolver>(SortClothesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
