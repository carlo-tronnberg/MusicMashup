const request = require('supertest');

const app = require('../../app');

describe('test api', () => {
    it('api/v1/dummy to return status 200', async () => {
      const response = await request(app).get('api/v1/dummy');
      expect(response.statusCode).toBe(200);
    });
});