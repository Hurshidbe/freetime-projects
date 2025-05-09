import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PostsModule } from './modules/posts/posts.module';
import { UsersService } from './modules/users/users.service';
import authGuard from './guards/auth.guard';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const secret = config.get<string>('JWT');
        console.log('SECRET:', secret); // faqat tekshirish uchun
        return {
          secret,
          signOptions: { expiresIn: '5m' },
        };
      },
    }),

    UsersModule,
    PostsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UsersService, authGuard],
})
export class AppModule {}
