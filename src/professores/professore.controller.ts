import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './create-professore.dto';

@Controller('professores')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Get()
  findAll() {
    return this.professorService.findAll();
  }

  @Post()
  create(@Body() dto: CreateProfessorDto) {
    return this.professorService.create(dto);
  }
}