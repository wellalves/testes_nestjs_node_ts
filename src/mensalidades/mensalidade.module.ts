import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensalidade } from './mensalidade.entity';
import { MensalidadeController } from './mensalidade.controller';
import { MensalidadeService } from './mensalidade.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mensalidade])],
  controllers: [MensalidadeController],
  providers: [MensalidadeService],
})
export class MensalidadeModule {}