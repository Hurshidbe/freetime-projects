import { ForbiddenException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { emit } from 'process';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwt: JwtService,
  ) {}
  async register(register: RegisterDto) {
    const findUser = await this.userRepo.findOne({
      where: { email: register.email },
    });
    if (findUser)
      throw new ForbiddenException("Siz allaqachon ro'yxatdan o'tgansiz");
    const hashedPassword = bcrypt.hash(register.password, 12);
    register.password = await hashedPassword;
    const newUser = this.userRepo.create(register);
    return await this.userRepo.save(newUser);
  }
  async login(login: LoginDto) {
    const findUser = await this.userRepo.findOne({
      where: { email: login.email },
    });
    if (!findUser)
      throw new ForbiddenException("Ro'yxatdan o'tib keyin kelas hop brat/opa");

    if (await bcrypt.compare(findUser.password, login.password))
      throw new ForbiddenException('Parol xatooooo');
    const token = this.jwt.sign({ userId: findUser.id, email: findUser.email });
    return { message: 'Tizimga xush keldingiz', token };
  }
}
