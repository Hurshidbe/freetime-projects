import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPostDto } from './dto/create-post.dto';
import { updatePostDto } from './dto/update-post.dto';
import { Postlar } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Postlar) private postsRepo: Repository<Postlar>,
  ) {}

  async create(createPostDto: createPostDto) {
    if (!createPostDto.title || !createPostDto.description) {
      throw new HttpException(`Ma'lumotlarni to'g'ri kiriting`, 402);
    }

    const savedPost = await this.postsRepo.save(createPostDto);
    return { status: 'successfully added', post: savedPost };
  }

  findAll() {
    return this.postsRepo.find();
  }

  async findOne(id: string) {
    if (!id) throw new HttpException(`ma'lumotlarni to'g'ri kiriting`, 402);
    const post = await this.postsRepo.findOne({ where: { id: id } });
    if (!post) throw new HttpException(`bu id da post mavjud emas`, 402);
    return { status: 'success', post };
  }

  update(id: number, updatePostDto: updatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
