import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  Render,
} from '@nestjs/common';
import { DataSource, EntityNotFoundError } from 'typeorm';
import { AppService } from './app.service';
import { EsemenyDto } from './esemeny.dto';
import Esemeny from './esemeny.entity';

@Controller()
export class AppController {
  readonly esemenyRepo = this.dataSource.getRepository(Esemeny);
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/esemeny')
  async esemenyData() {
    return await this.esemenyRepo.find();
  }

  @Post('/esemeny')
  async esemenyAdd(@Body() dto: EsemenyDto) {
    return await this.esemenyRepo.save({ ...dto });
  }

  @Delete('/esemeny/:id')
  async esemenyDelete(@Param('id') id: number) {
    return await this.esemenyRepo.delete(id);
  }
}
