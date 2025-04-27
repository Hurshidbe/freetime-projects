import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('rowid')
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
}
