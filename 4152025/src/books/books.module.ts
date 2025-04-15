import { Module } from '@nestjs/common';
import { booksService } from './books.service';
import { booksController } from './books.controller';
import { book } from './entities/books.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [booksService],
  controllers: [booksController],
  imports: [TypeOrmModule.forFeature([book])],
})
export class booksMoule {}
