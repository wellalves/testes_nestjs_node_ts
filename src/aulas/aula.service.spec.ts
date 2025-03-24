import { Test, TestingModule } from '@nestjs/testing';
import { AulaService } from './aula.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Aula } from './aula.entity';
import { Repository } from 'typeorm';

describe('AulaService', () => {
  let service: AulaService;
  let repo: Repository<Aula>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AulaService,
        {
          provide: getRepositoryToken(Aula),
          useValue: {
            find: jest.fn().mockResolvedValue(['aula mockada']),
            create: jest.fn().mockImplementation(dto => dto),
            save: jest.fn().mockImplementation(dto => Promise.resolve({ id: 1, ...dto })),
          },
        },
      ],
    }).compile();

    service = module.get<AulaService>(AulaService);
    repo = module.get<Repository<Aula>>(getRepositoryToken(Aula));
  });

  it('deve retornar lista de aulas', async () => {
    const result = await service.findAll();
    expect(result).toEqual(['aula mockada']);
  });

  it('deve criar uma aula', async () => {
    const dto = {
      materia: 'Matemática',
      professorId: 1,
    };

    const result = await service.create(dto);
    expect(result).toEqual({
      id: 1,
      materia: dto.materia,
      professor: { id: dto.professorId }
    });
  });
});
