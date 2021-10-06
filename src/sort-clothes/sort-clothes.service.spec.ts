import { Test, TestingModule } from '@nestjs/testing';
import { SortClothesService } from './sort-clothes.service';

describe('SortClothesService', () => {
  let service: SortClothesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortClothesService],
    }).compile();

    service = module.get<SortClothesService>(SortClothesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
