import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import authGuard from './guards/auth.guard';
import { prismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    UsersModule,
    PrismaModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (service: ConfigService) => {
        return {
          secret: service.get('jwt'),
          signOptions: { expiresIn: '5m' },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, authGuard],
})
export class AppModule {}
