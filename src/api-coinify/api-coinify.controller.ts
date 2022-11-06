import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCoinifyService } from './api-coinify.service';
import { CreateApiCoinifyDto } from './dto/create-api-coinify.dto';
import { UpdateApiCoinifyDto } from './dto/update-api-coinify.dto';

@Controller('api-coinify')
export class ApiCoinifyController {
  constructor(private readonly apiCoinifyService: ApiCoinifyService) {}

  @Post()
  create(@Body() createApiCoinifyDto: CreateApiCoinifyDto) {
    return this.apiCoinifyService.create(createApiCoinifyDto);
  }

  @Get()
  findAll() {
    return this.apiCoinifyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiCoinifyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApiCoinifyDto: UpdateApiCoinifyDto,
  ) {
    return this.apiCoinifyService.update(+id, updateApiCoinifyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiCoinifyService.remove(+id);
  }
}
