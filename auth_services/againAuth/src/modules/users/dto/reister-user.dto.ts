import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  isString,
  Length,
} from 'class-validator';

export class registerDto {
  @IsEmail()
  @IsNotEmpty()
  @Length(8, 30)
  email: string;

  @Length(6, 16)
  @IsString()
  @IsNotEmpty()
  password: string;
}
