import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Escola } from './escola.entity';
import { CreateEscolaDto } from './create-escola.dto';

@Injectable()
export class EscolaService {
  constructor(
    @InjectRepository(Escola)
    private escolaRepo: Repository<Escola>,
  ) {}

  findAll(): Promise<Escola[]> {
    return this.escolaRepo.find();
  }

  create(dto: CreateEscolaDto): Promise<Escola> {
    const escola = this.escolaRepo.create(dto);
    return this.escolaRepo.save(escola);
  }
}