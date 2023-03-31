/* eslint-disable no-undef */
const assert = require('assert');
const clinicData = require('../data/clinicData');

let clinics;

beforeAll(() => {
  clinics = clinicData;
});

describe('clinicData', () => {
  test('fetches clinics from two URLs', (done) => {
    expect(clinics).toHaveLength(0);

    // wait for clinics to be fetched
    setTimeout(() => {
      expect(clinics).not.toHaveLength(0);
      done();
    }, 5000); // wait for 5 seconds before checking the result
  });
});

describe('clinicData', () => {
  it('should return an array of clinics', (done) => {
    assert(Array.isArray(clinics), 'result is not an array');
    done();
  });
});

describe('clinicData', () => {
  test('handles errors when fetching clinics', async () => {
    // Use a mock https.get function that always throws an error
    const mockHttps = {
      get: jest.fn().mockImplementation((url, callback) => {
        const mockRes = {
          on: jest.fn()
        };
        callback(mockRes);
        mockRes.on.mock.calls[0][1]({ message: 'Error message' });
      })
    };

    mockHttps.get.mockReturnValue({ on: jest.fn() });

    // Override the original https module with the mock
    jest.mock('https', () => mockHttps);

    // Reset the module cache to ensure the mock is used
    jest.resetModules();

    const clinicData = require('../data/clinicData');
    const clinics = clinicData;

    expect(clinics).toHaveLength(0);
  });
});
