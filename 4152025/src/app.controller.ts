import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { booksService } from './books/books.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, // 1 ta constructorga 2 va undan ortiq private ozsak bo'ladi
    private booksService: booksService,
  ) {}
}
