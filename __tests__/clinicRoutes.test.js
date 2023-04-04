/* eslint-disable no-undef */
const helmet = require('helmet');
const request = require('supertest');
const express = require('express');
const csrf = require('csrf');

const router = require('../src/routes/clinicRoutes');

const app = express();

const csrfProtection = csrf({ cookie: true });

app.use('/', router);
app.use(helmet({
  contentSecurityPolicy: false,
  csrf: true
}));

describe('Clinic Routes', () => {
  test('GET / should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
