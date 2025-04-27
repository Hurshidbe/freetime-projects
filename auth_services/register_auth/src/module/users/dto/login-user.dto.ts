import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(2, 64)
  @IsNotEmpty()
  email: string;
  @IsString()
  @Length(4, 16)
  @IsNotEmpty()
  password: string;
}
