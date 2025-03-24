import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escola } from './escola.entity';
import { EscolaController } from './escola.controller';
import { EscolaService } from './escola.service';

@Module({
  imports: [TypeOrmModule.forFeature([Escola])],
  controllers: [EscolaController],
  providers: [EscolaService],
})
export class EscolaModule {}