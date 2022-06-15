import {
  describe, beforeAll, it, expect, afterAll,
} from '@jest/globals';
import fastify from 'fastify';
import init from '../app.js';

describe('requests', () => {
  let app;

  beforeAll(async () => {
    app = fastify({ logger: true });
    await init(app);
  });

  it('GET 200', async () => {
    const result = await app.inject({
      method: 'GET',
      url: '/',
    });
    expect(result.statusCode).toBe(200);
  });

  it('GET 404', async () => {
    const result = await app.inject({
      method: 'GET',
      url: '/404',
    });
    expect(result.statusCode).toBe(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
