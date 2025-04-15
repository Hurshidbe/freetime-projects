import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity()
@Unique(['bookname'])
export class book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  bookname: string;
  @Column()
  author: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  currency: 'uzs' | 'usd';
}
