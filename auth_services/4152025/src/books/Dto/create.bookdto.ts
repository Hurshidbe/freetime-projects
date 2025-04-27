import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
  Max,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 150)
  bookname: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  author: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 250)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(999999999)
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['uzs', 'usd'])
  currency: 'uzs' | 'usd';
}
