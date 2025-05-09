import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.Dto';
import { LoginDto } from './dto/login.dto';
import { changePassDto } from './dto/changePassDto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async registration(@Body() newUser: RegisterDto) {
    try {
      return await this.usersService.registration(newUser);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Post('login')
  async logination(@Body() user: LoginDto) {
    try {
      return await this.usersService.logination(user);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Post('chagepass')
  async changePassword(@Body() passData: changePassDto) {
    try {
      console.log(this.usersService.changePassword(passData));
      return await this.usersService.changePassword(passData);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
