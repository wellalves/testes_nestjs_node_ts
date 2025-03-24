import { Controller, Get } from '@nestjs/common';
import { ProfessorService } from './professor.service';

@Controller('professores')
export class ProfessorController {
  constructor(private readonly professoresService: ProfessorService) {}

  @Get()
  findAll() {
    return this.professoresService.findAll();
  }
}