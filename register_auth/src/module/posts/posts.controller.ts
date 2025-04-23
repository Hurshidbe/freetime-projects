import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from 'src/common/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() body: any) {
    try {
      return await this.postsService.create(body);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
