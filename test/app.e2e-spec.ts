import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { DataSource } from 'typeorm';

describe('EscolasController (e2e)', () => {
  let app: INestApplication;
  let dataSource: DataSource;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();

    dataSource = app.get(DataSource);
  });

  afterAll(async () => {
    await dataSource.destroy();
    await app.close();
  });

  it('/escolas (POST)', async () => {
    const res = await request(app.getHttpServer())
      .post('/escolas')
      .send({ nome: 'Escola Teste' })
      .expect(201);

    expect(res.body.nome).toBe('Escola Teste');
    expect(res.body.id).toBeDefined();
  });

  it('/escolas (GET)', async () => {
    const res = await request(app.getHttpServer())
      .get('/escolas')
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });
});