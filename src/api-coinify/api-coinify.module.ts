import { Module } from '@nestjs/common';
import { ApiCoinifyService } from './api-coinify.service';
import { ApiCoinifyController } from './api-coinify.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ApiCoinifyController],
  imports: [HttpModule],
  providers: [ApiCoinifyService],
})
export class ApiCoinifyModule {}
