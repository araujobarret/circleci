import * as request from 'supertest';
import server from '../index';

describe('Tools routes tests', () => {
  afterAll((done) => {
    server.close(done)
  });

  test('Test application get route', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        done();
      });      
  });
});