import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Test from "./Test";
import Team from "./Team";
import Subject from "./Subject";

@Entity('terms')
export default class Term {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  period: string;

  @OneToMany(() => Subject, subject => subject.term)
  subjects: Subject[];

  teams: Team[];

  tests: Test[];
}