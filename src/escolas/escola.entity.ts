import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aluno } from '../alunos/aluno.entity';
import { Professor } from '../professores/professor.entity';

@Entity()
export class Escola {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Aluno, aluno => aluno.escola)
  alunos: Aluno[];

  @OneToMany(() => Professor, professor => professor.escola)
  professores: Professor[];
}