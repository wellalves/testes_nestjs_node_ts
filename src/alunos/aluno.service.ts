import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './aluno.entity';
import { CreateAlunoDto } from './create-aluno.dto';
import { Escola } from '../escolas/escola.entity';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private alunoRepo: Repository<Aluno>,
  ) {}

  findAll(): Promise<Aluno[]> {
    return this.alunoRepo.find({ relations: ['escola', 'aulas', 'mensalidades'] });
  }

  create(dto: CreateAlunoDto): Promise<Aluno> {
    const aluno = this.alunoRepo.create({
      nome: dto.nome,
      escola: { id: dto.escolaId }
    });
    return this.alunoRepo.save(aluno);
  }
}