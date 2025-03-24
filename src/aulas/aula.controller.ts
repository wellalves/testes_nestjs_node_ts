import { Controller, Get, Post, Body } from '@nestjs/common';
import { AulaService } from './aula.service';
import { CreateAulaDto } from './create-aula.dto';

@Controller('aulas')
export class AulaController {
  constructor(private readonly aulaService: AulaService) {}

  @Get()
  findAll() {
    return this.aulaService.findAll();
  }

  @Post()
  create(@Body() dto: CreateAulaDto) {
    return this.aulaService.create(dto);
  }
}