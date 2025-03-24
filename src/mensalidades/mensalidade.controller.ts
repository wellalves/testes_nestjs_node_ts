import { Controller, Get, Post, Body } from '@nestjs/common';
import { MensalidadeService } from './mensalidade.service';
import { CreateMensalidadeDto } from './create-mensalidade.dto';

@Controller('mensalidades')
export class MensalidadeController {
  constructor(private readonly mensalidadeService: MensalidadeService) {}

  @Get()
  findAll() {
    return this.mensalidadeService.findAll();
  }

  @Post()
  create(@Body() dto: CreateMensalidadeDto) {
    return this.mensalidadeService.create(dto);
  }
}