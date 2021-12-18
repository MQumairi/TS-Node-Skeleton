import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  id: number;
  title: string;
  content: string;
}