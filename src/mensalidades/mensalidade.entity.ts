import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Aluno } from '../alunos/aluno.entity';

@Entity()
export class Mensalidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: number;

  @Column()
  dataPagamento: string;

  @ManyToOne(() => Aluno, aluno => aluno.mensalidades)
  aluno: Aluno;
}