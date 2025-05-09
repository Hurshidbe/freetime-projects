import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @Length(8, 32)
  email: string;

  @IsString()
  password: string;
}
