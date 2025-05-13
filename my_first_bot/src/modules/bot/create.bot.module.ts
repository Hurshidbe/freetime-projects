import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotUpdate } from './bot';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN as string,
    }),
  ],
  providers: [BotUpdate],
})
export class botModule {}
