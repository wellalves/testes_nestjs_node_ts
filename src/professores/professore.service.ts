import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './professor.entity';
import { CreateProfessorDto } from './create-professore.dto';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private professorRepo: Repository<Professor>,
  ) {}

  findAll(): Promise<Professor[]> {
    return this.professorRepo.find({ relations: ['escola', 'aulas'] });
  }

  create(dto: CreateProfessorDto): Promise<Professor> {
    const professor = this.professorRepo.create({
      nome: dto.nome,
      escola: { id: dto.escolaId }
    });
    return this.professorRepo.save(professor);
  }
}