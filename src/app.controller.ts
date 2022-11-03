import { Controller, Get } from '@nestjs/common';
import { TestCollection } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<TestCollection[]> {
    return this.appService.getHello();
  }
}
