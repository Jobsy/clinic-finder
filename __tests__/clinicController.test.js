/* eslint-disable no-undef */
const { getClinics } = require('../src/controllers/clinicController');

describe('getClinics', () => {
  test('returns clinics based on query params', () => {
    const req = {
      query: {
        name: 'clinic 1',
        state: 'CA',
        availability: '2022-04-01'
      }
    };
    const res = {
      json: jest.fn()
    };

    getClinics(req, res);

    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
