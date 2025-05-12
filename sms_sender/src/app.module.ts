import { Module } from '@nestjs/common';
import { UsersService } from './modules/users/users.service';
import RedisService from './modules/database/redis.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import smsProvider from './providers/sms.provider';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [UsersService, RedisService, smsProvider, PrismaService],
})
export class AppModule {}
