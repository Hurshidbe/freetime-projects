import { IsString, Length } from 'class-validator';

export class createPostDto {
  @IsString()
  @Length(2, 100)
  title: string;

  @IsString()
  @Length(2, 500)
  description: string;
}
