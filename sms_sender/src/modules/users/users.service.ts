import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import smsProvider from 'src/providers/sms.provider';
import { Prisma } from '@prisma/client';
import * as otp from 'otp-generator'; // ✅ SHU TARZDA import qil

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private smsprovide: smsProvider,
  ) {}

  async create(createUserDto: any) {
    const user = await this.prisma.user.create({ data: createUserDto });
    const generatedOtp = otp.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    const word: string = `dilshodbek ko't`;
    await this.smsprovide.sendSms({
      message: `StudyHub ilovasiga kirish kodi:${word}, `,
      mobile_phone: '+998939453405', //
      from: '+998977777777',
    });
    screenY;
  }
}
