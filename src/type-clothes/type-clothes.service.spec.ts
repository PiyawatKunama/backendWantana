import { Test, TestingModule } from '@nestjs/testing';
import { TypeClothesService } from './type-clothes.service';

describe('TypeClothesService', () => {
  let service: TypeClothesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeClothesService],
    }).compile();

    service = module.get<TypeClothesService>(TypeClothesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
