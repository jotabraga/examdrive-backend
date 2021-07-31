import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Class from "./Class";
import Test from "./Test";

@Entity('professors')
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  classes: Class[];

  tests: Test[];
}