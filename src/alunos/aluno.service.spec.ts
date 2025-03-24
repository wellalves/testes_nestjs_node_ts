import { Test, TestingModule } from '@nestjs/testing';
import { AlunoService } from './aluno.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Aluno } from './aluno.entity';
import { Repository } from 'typeorm';

describe('AlunoService', () => {
  let service: AlunoService;
  let repo: Repository<Aluno>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlunoService,
        {
          provide: getRepositoryToken(Aluno),
          useValue: {
            find: jest.fn().mockResolvedValue(['aluno mockado']),
            create: jest.fn().mockImplementation(dto => dto),
            save: jest.fn().mockImplementation(dto => Promise.resolve({ id: 1, ...dto })),
          },
        },
      ],
    }).compile();

    service = module.get<AlunoService>(AlunoService);
    repo = module.get<Repository<Aluno>>(getRepositoryToken(Aluno));
  });

  it('deve retornar lista de alunos', async () => {
    const result = await service.findAll();
    expect(result).toEqual(['aluno mockado']);
  });

  it('deve criar um aluno', async () => {
    const dto = { nome: 'Aluno 1', escolaId: 1 };
  
    const result = await service.create(dto);
  
    expect(result).toEqual({
      id: 1,
      nome: 'Aluno 1',
      escola: { id: 1 },
    });
  });
});
