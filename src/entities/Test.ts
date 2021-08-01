import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./Subject";
import Professor from "./Professor";

@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  professorId: number;

  @Column()
  subjectId: number;

  @Column()
  category: string;

  @Column()
  link: string;

  @Column()
  name: string;

  @ManyToOne(() => Subject, subject => subject.tests)
  subject: Subject;

  @ManyToOne(() => Professor, professor => professor.tests)
  professor: Professor;
}