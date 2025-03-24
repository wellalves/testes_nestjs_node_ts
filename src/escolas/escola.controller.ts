import { Controller, Get, Post, Body } from '@nestjs/common';
import { EscolaService } from './escola.service';
import { CreateEscolaDto } from './create-escola.dto';

@Controller('escolas')
export class EscolaController {
  constructor(private readonly escolaService: EscolaService) {}

  @Get()
  findAll() {
    return this.escolaService.findAll();
  }

  @Post()
  create(@Body() dto: CreateEscolaDto) {
    return this.escolaService.create(dto);
  }
}