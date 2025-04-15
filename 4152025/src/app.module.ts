import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { booksMoule } from './books/books.module';
import { booksService } from './books/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { book } from './books/entities/books.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([book]),
    booksMoule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      password: <string>'admin',
      database: 'books',
      username: 'postgres',
      port: 5432,
      entities: [book],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, booksService],
})
export class AppModule {}
