import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { Response, response } from 'express';
import { AuthGuard } from 'src/common/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async register(@Body() registerDto: RegisterDto) {
    try {
      return await this.usersService.register(registerDto);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { message, token } = await this.usersService.login(loginDto);
    res.cookie('authToken', token, {
      httpOnly: true,
    });
    try {
      return { message };
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
  @UseGuards(AuthGuard)
  @Get('guard')
  test() {
    return 'Guard ishlamoqda';
  }
}
