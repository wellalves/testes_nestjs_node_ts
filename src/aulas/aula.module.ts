import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aula } from './aula.entity';
import { AulaController } from './aula.controller';
import { AulaService } from './aula.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aula])],
  controllers: [AulaController],
  providers: [AulaService],
})
export class AulaModule {}