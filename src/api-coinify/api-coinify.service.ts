import { Injectable } from '@nestjs/common';
import { CreateApiCoinifyDto } from './dto/create-api-coinify.dto';
import { UpdateApiCoinifyDto } from './dto/update-api-coinify.dto';
import { HttpService } from '@nestjs/axios';
import { EstimateTransactionDto } from './dto/estimate-transaction.dto';
import { lastValueFrom } from 'rxjs';
import { IAllRates, IRateSpecificCurrency } from './api-coinify.service.types';

@Injectable()
export class ApiCoinifyService {
  constructor(private readonly http: HttpService) {}
  create(createApiCoinifyDto: CreateApiCoinifyDto) {
    return 'This action adds a new apiCoinify';
  }

  findAll() {
    return `This action returns all apiCoinify`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiCoinify`;
  }

  update(id: number, updateApiCoinifyDto: UpdateApiCoinifyDto) {
    return `This action updates a #${id} apiCoinify`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiCoinify`;
  }

  // Sopra CRUD - da  qui gestione dati
  async getRateSpecificCurrency(currency: string): Promise<{
    name: string;
    buy: number;
    sell: number;
  }> {
    const options = {
      url: 'https://api.coinify.com/v3/rates/' + currency,
      params: {},
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await lastValueFrom(
      this.http.request<IRateSpecificCurrency>(options),
    );
    return {
      name: response.data.data.name,
      buy: response.data.data.buy,
      sell: response.data.data.sell,
    };
  }

  async getAllRates(): Promise<{
    data: IAllRates;
  }> {
    const options = {
      url: 'https://api.coinify.com/v3/rates',
      params: {},
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await lastValueFrom(this.http.request<IAllRates>(options));
    console.log(response.data.data);
    return { data: response.data };
  }
  /* 
  async getCoinifyPayments(): Promise<{
    data: any;
  }> {
    const options = {
      url: 'https://api.coinify.com/v3/payments',
      params: {},
      headers: {
        Authorization: auth_header,
        'Content-Type': 'application/json',
      },
    };
    const response = await lastValueFrom(this.http.request<IAllRates>(options));
    return { data: response.data.data };
  }
 */
}
