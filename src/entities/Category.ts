import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Test from "./Test";

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  tests: Test[];
}