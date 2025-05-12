import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import smsProvider from 'src/providers/sms.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, smsProvider],
})
export class UsersModule {}
