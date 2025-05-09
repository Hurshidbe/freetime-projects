import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.Dto';
import { LoginDto } from './dto/login.dto';
import { changePassDto } from './dto/changePassDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async registration(newUser: RegisterDto) {
    const searchByEmail = await this.prisma.user.findFirst({
      where: { email: newUser.email },
    });
    if (searchByEmail)
      throw new HttpException('bu email oldin registratsiya qilingan', 403);
    const saved = await this.prisma.user.create({ data: newUser });
    return { message: 'success', newUser };
  }

  async logination(user: LoginDto) {
    const ischecked = await this.prisma.user.findFirst({
      where: { email: user.email, password: user.password },
    });
    if (!ischecked) throw new HttpException('login yoki parol xato', 402);

    const token = await this.jwt.signAsync({
      id: ischecked.id,
      email: ischecked.email,
      name: ischecked.name,
    });
    return token;
  }

  async changePassword(passData: changePassDto) {}
}
