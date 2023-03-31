/* eslint-disable no-undef */
const request = require('supertest');
const express = require('express');
const router = require('../src/routes/clinicRoutes');

const app = express();
app.use('/', router);

describe('Clinic Routes', () => {
  test('GET / should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
