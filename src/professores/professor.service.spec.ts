import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorService } from './professor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Professor } from './professor.entity';
import { Repository } from 'typeorm';

describe('ProfessorService', () => {
  let service: ProfessorService;
  let repo: Repository<Professor>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfessorService,
        {
          provide: getRepositoryToken(Professor),
          useValue: {
            find: jest.fn().mockResolvedValue(['mocked professor']),
            create: jest.fn().mockImplementation(dto => dto),
            save: jest.fn().mockImplementation(dto => Promise.resolve({ id: 1, ...dto })),
          },
        },
      ],
    }).compile();

    service = module.get<ProfessorService>(ProfessorService);
    repo = module.get<Repository<Professor>>(getRepositoryToken(Professor));
  });

  it('should return list of professors', async () => {
    const result = await service.findAll();
    expect(result).toEqual(['mocked professor']);
  });

  it('should create a professor', async () => {
    const dto = { nome: 'Fulano', escolaId: 1 };
    const result = await service.create(dto);
    expect(result).toEqual({
      id: 1,
      nome: dto.nome,
      escola: { id: dto.escolaId },
    });
    
  });
});
