import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.enableVersioning({
      type: VersioningType.HEADER,
      header: 'Accept-Version',
    });
    await app.init();
  });

  it('/version (GET) with neutral version', () => {
    return request(app.getHttpServer())
      .get('/version')
      .expect(200)
      .expect('Hello World!');
  });

  it('/version (GET) with v2 version', () => {
    return request(app.getHttpServer())
      .get('/version')
      .set('Accept-Version', 'v2')
      .expect(200)
      .expect('Hello World!');
  });
});
