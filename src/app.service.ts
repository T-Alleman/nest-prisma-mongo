import { Injectable } from '@nestjs/common';
import { TestCollection } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): Promise<TestCollection[]> {
    return this.prisma.testCollection.findMany();
  }
}
