import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { registerDto } from './dto/reister-user.dto';
import { loginDto } from './dto/login-user.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/guards/authGuard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  register(@Body() data: registerDto) {
    return this.usersService.register(data);
  }
  @Post('login')
  async login(
    @Body() data: loginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token, message } = await this.usersService.login(data);
    res.cookie('authToken', token, { httpOnly: true });
    return message;
  }
}
