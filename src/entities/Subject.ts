import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Test from "./Test";
import Team from "./Team";
import Term from "./Term";
import { TreeMetadataArgs } from "typeorm/metadata-args/TreeMetadataArgs";

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  termId: number;

  @ManyToOne(() => Term, term => term.subjects)
  term: Term;

  teams: Team[];

  tests: Test[];
}