import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Escola } from '../escolas/escola.entity';
import { Aula } from '../aulas/aula.entity';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Escola, escola => escola.professores)
  escola: Escola;

  @OneToMany(() => Aula, aula => aula.professor)
  aulas: Aula[];
}