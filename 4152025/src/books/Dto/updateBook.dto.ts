import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
  Max,
  IsOptional,
} from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(3, 150)
  bookname: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  author: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(3, 250)
  description: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(999999999)
  price: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsIn(['uzs', 'usd'])
  currency: 'uzs' | 'usd';
}
