import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EscolaModule } from './escolas/escola.module';
import { AlunoModule } from './alunos/aluno.module';
import { ProfessorModule } from './professores/professor.module';
import { AulaModule } from './aulas/aula.module';
import { MensalidadeModule } from './mensalidades/mensalidade.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EscolaModule,
    AlunoModule,
    ProfessorModule,
    AulaModule,
    MensalidadeModule,
  ],
})
export class AppModule {}