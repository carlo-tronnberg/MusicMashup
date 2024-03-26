const request = require('supertest');

const app = require('../../app');

const SECONDS = 1000;
jest.setTimeout(60 * SECONDS);

describe('Test health API', () => {
  it('api/v1/health to return status 200', async () => {
    const response = await request(app).get('/api/v1/health').send();
    expect(response.statusCode).toBe(200);
  });
});

describe('Test API without mbid', () => {
  it('api/v1/getmusicinfo to return status 400', async () => {
    const response = await request(app).get('/api/v1/getmusicinfo');
    expect(response.statusCode).toBe(400);
  });
});

describe('Test API with non-existing mbid', () => {
  it('api/v1/getmusicinfo to return status 404', async () => {
    const response = await request(app).get(
      '/api/v1/getmusicinfo?mbid=37993cdf-f61a-488f-8cca-07e03b8aaa01',
    );
    expect(response.statusCode).toBe(404);
  });
});

describe('Test API with valid mbid', () => {
  it('api/v1/getmusicinfo to return status 200', async () => {
    const response = await request(app).get(
      '/api/v1/getmusicinfo?mbid=37993cdf-f61a-488f-8cca-07e03b8aaa02',
    );
    expect(response.statusCode).toBe(200);
  });
});
