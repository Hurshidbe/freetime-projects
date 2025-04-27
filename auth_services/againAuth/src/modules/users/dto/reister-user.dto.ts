import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './login-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
