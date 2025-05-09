import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
  MaxLength,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 32)
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Length(8, 32)
  email: string;

  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
  })
  @MaxLength(16)
  password: string;
}
