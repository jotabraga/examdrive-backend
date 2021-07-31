import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import Test from "./Test";
import Class from "./Class";

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  period: string;

  tests: Test[];

  classes: Class[];
}