import { IsNotEmpty, IsStrongPassword, MaxLength } from 'class-validator';

export class changePassDto {
  oldass: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
  })
  @MaxLength(16)
  newPass: string;

  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
  })
  @MaxLength(16)
  renewPass: string;
}
