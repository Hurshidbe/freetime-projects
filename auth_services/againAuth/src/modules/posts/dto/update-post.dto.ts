import { IsString, Length } from 'class-validator';

export class updatePostDto {
  @IsString()
  @Length(2, 100)
  title: string;

  @IsString()
  @Length(2, 500)
  description: string;
}
