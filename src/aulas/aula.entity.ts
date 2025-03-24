import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Professor } from '../professores/professor.entity';
import { Aluno } from '../alunos/aluno.entity';

@Entity()
export class Aula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  materia: string;

  @ManyToOne(() => Professor, professor => professor.aulas)
  professor: Professor;

  @ManyToMany(() => Aluno, aluno => aluno.aulas)
  alunos: Aluno[];
}