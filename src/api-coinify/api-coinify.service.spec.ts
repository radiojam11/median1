import { Test, TestingModule } from '@nestjs/testing';
import { ApiCoinifyService } from './api-coinify.service';

describe('ApiCoinifyService', () => {
  let service: ApiCoinifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCoinifyService],
    }).compile();

    service = module.get<ApiCoinifyService>(ApiCoinifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
