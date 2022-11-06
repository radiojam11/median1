import { Test, TestingModule } from '@nestjs/testing';
import { ApiCoinifyController } from './api-coinify.controller';
import { ApiCoinifyService } from './api-coinify.service';

describe('ApiCoinifyController', () => {
  let controller: ApiCoinifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiCoinifyController],
      providers: [ApiCoinifyService],
    }).compile();

    controller = module.get<ApiCoinifyController>(ApiCoinifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
