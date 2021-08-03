import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Test from "./Test";
import Team from "./Team";

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  period: string;

  teams: Team[];

  tests: Test[];
}