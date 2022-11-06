import { Injectable } from '@nestjs/common';
import { CreateApiCoinifyDto } from './dto/create-api-coinify.dto';
import { UpdateApiCoinifyDto } from './dto/update-api-coinify.dto';

@Injectable()
export class ApiCoinifyService {
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
}
