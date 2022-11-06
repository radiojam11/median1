import { PartialType } from '@nestjs/swagger';
import { CreateApiCoinifyDto } from './create-api-coinify.dto';

export class UpdateApiCoinifyDto extends PartialType(CreateApiCoinifyDto) {}
