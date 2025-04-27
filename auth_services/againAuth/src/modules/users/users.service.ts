import { HttpException, Injectable } from '@nestjs/common';
import { registerDto } from './dto/reister-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async register(data: registerDto) {
    if (!data) throw new HttpException("ma'lumotlarni to'g'ri kiriting", 401);
    const savingUser = await this.userRepo.save(data);
    return {
      status: `salom ${data.name}. siz registratsiyadan o'tdingiz`,
      newUser: savingUser,
    };
  }
}
