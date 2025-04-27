import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class loginDto {
  @IsEmail()
  @IsNotEmpty()
  @Length(8, 30)
  email: string;

  @Length(6, 16)
  @IsString()
  @IsNotEmpty()
  password: string;
}
