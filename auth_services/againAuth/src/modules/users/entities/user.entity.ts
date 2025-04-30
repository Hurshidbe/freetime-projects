import { Post } from '@nestjs/common';
import { Postlar } from 'src/modules/posts/entities/post.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('rowid')
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;

  @OneToMany(() => Postlar, (post) => post.user)
  posts: Postlar[];
}
