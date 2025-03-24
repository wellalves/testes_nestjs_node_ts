import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensalidade } from './mensalidade.entity';
import { CreateMensalidadeDto } from './create-mensalidade.dto';

@Injectable()
export class MensalidadeService {
  constructor(
    @InjectRepository(Mensalidade)
    private mensalidadeRepo: Repository<Mensalidade>,
  ) {}

  findAll(): Promise<Mensalidade[]> {
    return this.mensalidadeRepo.find({ relations: ['aluno'] });
  }

  create(dto: CreateMensalidadeDto): Promise<Mensalidade> {
    const mensalidade = this.mensalidadeRepo.create({
      valor: dto.valor,
      dataPagamento: dto.dataPagamento,
      aluno: { id: dto.alunoId }
    });
    return this.mensalidadeRepo.save(mensalidade);
  }
}