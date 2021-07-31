import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import Subject from "./Subject";
import Professor from "./Professor";

@Entity('classes')
export default class Class {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  professorId: number;

  @Column()
  subjectId: number;

  @ManyToOne(() => Subject, subject => subject.classes)
  subject: Subject;

  @ManyToOne(() => Professor, professor => professor.classes)
  professor: Professor;
}