import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Escola } from '../escolas/escola.entity';
import { Aula } from '../aulas/aula.entity';
import { Mensalidade } from '../mensalidades/mensalidade.entity';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Escola, escola => escola.alunos)
  escola: Escola;

  @ManyToMany(() => Aula, aula => aula.alunos)
  @JoinTable()
  aulas: Aula[];

  @OneToMany(() => Mensalidade, mensalidade => mensalidade.aluno)
  mensalidades: Mensalidade[];
}