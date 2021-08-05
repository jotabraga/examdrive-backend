import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./Subject";
import Professor from "./Professor";
import Category from "./Category";

@Entity('tests')
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  professorId: number;

  @Column()
  subjectId: number;

  @Column()
  categoryId: number;

  @Column()
  link: string;

  @Column()
  name: string;

  @ManyToOne(() => Subject, subject => subject.tests)
  subject: Subject;

  @ManyToOne(() => Professor, (professor) => professor.id)
  professor!: Professor;

  @ManyToOne(() => Category, category => category.tests)
  category: Category;
}