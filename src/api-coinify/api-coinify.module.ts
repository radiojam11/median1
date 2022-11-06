import { Module } from '@nestjs/common';
import { ApiCoinifyService } from './api-coinify.service';
import { ApiCoinifyController } from './api-coinify.controller';

@Module({
  controllers: [ApiCoinifyController],
  providers: [ApiCoinifyService]
})
export class ApiCoinifyModule {}
