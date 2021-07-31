import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./Subject";

@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  professorId: number;

  @Column()
  subjectId: number;

  @ManyToOne(() => Subject, subject => subject.tests)
  subject: Subject;

  @Column()
  name: string;

  @Column()
  link: string;
}