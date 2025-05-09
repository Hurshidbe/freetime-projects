import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export class prismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
}
