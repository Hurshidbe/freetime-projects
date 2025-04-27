import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { booksService } from './books.service';
import { book } from './entities/books.entity';
import { error } from 'console';
import { CreateBookDto } from './Dto/create.bookdto';
import { UpdateBookDto } from './Dto/updateBook.dto';

@Controller('books')
export class booksController {
  constructor(private booksService: booksService) {}

  @Post('book')
  async addBook(@Body() createbookdto: CreateBookDto) {
    return await this.booksService.bookAdder(createbookdto);
  }

  @Get('books')
  async getAllBooks() {
    const allbook = await this.booksService.getAllBooks();
    return allbook;
  }

  @Get(':id')
  async getbookbyId(@Param('id') id: number) {
    const data = await this.booksService.getBookById(id);
    return { status: 'succes', data };
  }

  @Put(':id')
  async updateBookById(
    @Param('id') id: number,
    @Body() UpdateBookDto: UpdateBookDto,
  ) {
    const updatedBook = await this.booksService.updateBookById(
      id,
      UpdateBookDto,
    );
    return updatedBook;
  }

  @Delete(':id')
  async delBookById(@Param('id') id: number) {
    return await this.booksService.deleteBook(id);
  }
}
