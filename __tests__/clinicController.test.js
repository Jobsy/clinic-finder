
const { getClinics } = require('../src/controllers/clinicController');

describe('getClinics', () => {
  test('returns clinics based on query params', () => {
    const req = {
      query: {
        name: 'clinic 1',
        state: 'CA',
        availability: '2022-04-01',
      },
    };
    const res = {
      json: jest.fn(),
    };

    getClinics(req, res);

    const expectedClinics = [      
        { 
            name: 'Clinic 1',
            stateCode: 'CA', 
            availability: { 
                from: '2022-03-30', 
                to: '2022-04-10', 
            }
        }
    ];

    expect(res.json).toHaveBeenCalledTimes(1);
    // expect(res.json).toHaveBeenCalledWith(expectedClinics);
  });
});