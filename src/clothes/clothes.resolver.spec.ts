import { Test, TestingModule } from '@nestjs/testing';
import { ClothesResolver } from './clothes.resolver';
import { ClothesService } from './clothes.service';

describe('ClothesResolver', () => {
  let resolver: ClothesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClothesResolver, ClothesService],
    }).compile();

    resolver = module.get<ClothesResolver>(ClothesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
