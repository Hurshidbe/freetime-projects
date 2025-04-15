import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { book } from './entities/books.entity';
import { Repository } from 'typeorm';
import { error } from 'console';
import { CreateBookDto } from './Dto/create.bookdto';
import { UpdateBookDto } from './Dto/updateBook.dto';
@Injectable()
export class booksService {
  constructor(
    @InjectRepository(book) private bookRepository: Repository<book>,
  ) {}

  async bookAdder(newbook: CreateBookDto) {
    try {
      const addingbook = await this.bookRepository.save(newbook);
      return addingbook;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  async getAllBooks() {
    return await this.bookRepository.find();
  }

  async getBookById(id: number) {
    const idedBook = await this.bookRepository.findOneBy({ id });
    if (!idedBook) {
      throw new error(error);
    }
    return idedBook;
  }

  async updateBookById(id: number, UpdateBookDto: UpdateBookDto) {
    try {
      const updatingBook = await this.bookRepository.findOneBy({ id });
      if (!updatingBook) {
        throw new Error(`Kitob topilmadi: ${id}`);
      }
      return await this.bookRepository.save({
        ...updatingBook,
        ...UpdateBookDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async deleteBook(id: number) {
    const delingBook = await this.bookRepository.findOneBy({ id });
    if (!delingBook) {
      return 'bu id ostida kitob yoq';
    } else {
      await this.bookRepository.delete(delingBook);
      return 'book successfully deleted from database';
    }
  }
}
