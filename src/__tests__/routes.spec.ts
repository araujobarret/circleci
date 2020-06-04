import * as request from 'supertest';
import server from '../index';

describe('Tools routes tests', () => {
  test('Test application get route', async () => {
    await request(server)
      .get('/')
      .expect(200);
  });
});