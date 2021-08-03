import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import Subject from "./Subject";
import Professor from "./Professor";

@Entity('teams')
export default class Team {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  professorId: number;

  @Column()
  subjectId: number;

  @ManyToOne(() => Subject, subject => subject.teams)
  subject: Subject;

  @ManyToOne(() => Professor, professor => professor.teams)
  professor: Professor;
}