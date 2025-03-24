import { Test, TestingModule } from '@nestjs/testing';

import { getRepositoryToken } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Mensalidade } from 'src/mensalidades/mensalidade.entity';
import { MensalidadeService } from 'src/mensalidades/mensalidade.service';

describe('MensalidadeService', () => {
  let service: MensalidadeService;
  let repo: Repository<Mensalidade>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MensalidadeService,
        {
          provide: getRepositoryToken(Mensalidade),
          useValue: {
            find: jest.fn().mockResolvedValue(['mensalidade mockada']),
            create: jest.fn().mockImplementation(dto => dto),
            save: jest.fn().mockImplementation(dto => Promise.resolve({ id: 1, ...dto })),
          },
        },
      ],
    }).compile();

    service = module.get<MensalidadeService>(MensalidadeService);
    repo = module.get<Repository<Mensalidade>>(getRepositoryToken(Mensalidade));
  });

  it('deve retornar lista de mensalidades', async () => {
    const result = await service.findAll();
    expect(result).toEqual(['mensalidade mockada']);
  });

  it('deve criar uma mensalidade', async () => {
    const dto = {
      valor: 100.0,
      dataPagamento: '2024-03-01',
      alunoId: 1,
    };

    const result = await service.create(dto);
    expect(result).toEqual({
      id: 1,
      valor: dto.valor,
      dataPagamento: dto.dataPagamento,
      aluno: { id: dto.alunoId },
    });
    
  });
});
