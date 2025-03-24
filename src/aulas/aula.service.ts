import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aula } from './aula.entity';
import { CreateAulaDto } from './create-aula.dto';

@Injectable()
export class AulaService {
  constructor(
    @InjectRepository(Aula)
    private aulaRepo: Repository<Aula>,
  ) {}

  findAll(): Promise<Aula[]> {
    return this.aulaRepo.find({ relations: ['professor', 'alunos'] });
  }

  create(dto: CreateAulaDto): Promise<Aula> {
    const aula = this.aulaRepo.create({
      materia: dto.materia,
      professor: { id: dto.professorId }
    });
    return this.aulaRepo.save(aula);
  }
}