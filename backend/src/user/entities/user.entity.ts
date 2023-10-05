import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // login + reg
  @Column()
  phone: number

  // login + reg
  @Column({ length: 100 })
  password: string

  // reg
  @Column({ length: 900 })
  name: string;

  // reg
  @Column()
  age: number

  // reg
  @Column({ length: 1000 })
  email: string;
}
