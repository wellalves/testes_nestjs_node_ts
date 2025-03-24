import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './create-aluno.dto';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Post()
  create(@Body() dto: CreateAlunoDto) {
    return this.alunoService.create(dto);
  }
}