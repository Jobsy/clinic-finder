/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');

describe('GET /clinics', () => {
  it('responds with JSON and a 200 status code', async () => {
    const response = await request(app).get('/clinics');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
  });
});
