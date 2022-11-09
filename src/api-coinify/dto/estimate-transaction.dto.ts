import { PartialType } from '@nestjs/swagger';
import { CreateApiCoinifyDto } from './create-api-coinify.dto';

export class EstimateTransactionDto extends PartialType(CreateApiCoinifyDto) {
  fromCurrency: string;

  toCurrency: string;

  paymentMethod: string;

  amount: number;

  country: string;

  network: string;

  isBuyOrSell: string;
}
