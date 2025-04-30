import { HttpException, Injectable } from '@nestjs/common';
import { registerDto } from './dto/reister-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { loginDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private JWT: JwtService,
  ) {}

  async register(data: registerDto) {
    if (!data.email || !data.name || !data.password)
      throw new HttpException("ma'lumotlarni to'g'ri kiriting", 401);
    const isuniq = await this.userRepo.findOne({
      where: { email: data.email },
    });
    if (isuniq)
      throw new HttpException('bu email oldin registratsiya qilingan', 402);
    const savingUser = await this.userRepo.save(data);
    return {
      status: `salom ${data.name}. siz registratsiyadan o'tdingiz`,
      newUser: savingUser,
    };
  }

  async login(data: loginDto) {
    if (!data) throw new HttpException("malumotlarni to'g'ri kiriting", 401);
    const isvrfd = await this.userRepo.findOne({
      where: { email: data.email },
    });
    if (!isvrfd) throw new HttpException('email yoki parol hato', 403);
    if (isvrfd.password !== data.password)
      throw new HttpException('email yoki parol hato', 403);

    const token = this.JWT.sign({
      id: isvrfd.id,
      email: isvrfd.email,
      name: isvrfd.name,
    });
    return { message: `tizimga hush kelibsiz ${isvrfd.name}`, token };
  }
}
