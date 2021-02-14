import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { AppService } from './app.service';

export enum CatDetailEnum {
  Persian = 'Persian',
  Tabby = 'Tabby',
  Siamese = 'Siamese',
}

export class CatDetail {
  breed: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @ApiQuery({
    name: 'breed',
    enumName: 'CatDetailEnum',
    enum: CatDetailEnum,
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('world')
  @ApiQuery({
    name: 'breed',
    enumName: 'CatDetailEnum',
    enum: CatDetailEnum,
  })
  getWorld(@Query('breed') breed: CatDetailEnum): string {
    return breed;
  }
}
