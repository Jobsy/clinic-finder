
const searchClinics = require('../services/searchClinics');
const clinicData = require('../data/clinicData');

let clinics;

beforeAll(() => {
    clinics = clinicData;
});

describe('searchClinics', () => {
    test('should return all clinics if no parameters are provided', (done) => {
        // wait for clinics to be fetched
        setTimeout(() => {
            expect(searchClinics({}, clinics)).toEqual(clinics);
            done();
        }, 5000); // wait for 5 seconds before checking the result
    });
});

describe('searchClinics', () => {
  test('returns clinics with matching name', () => {
        const result = searchClinics({ name: 'Medical' }, clinics);
        const expected = clinicData.filter(clinic => {
            let clinicName = clinic.name || clinic.clinicName 
            return /medical/i.test(clinicName)
        });

        expect(result).toEqual(expected);
  });

  test('returns clinics in the provided state', () => {
        const result = searchClinics({ state: 'CA' }, clinics);
        const expected = clinicData.filter(clinic => {
            let clinicState = clinic.stateName || clinic.stateCode 
            return clinicState === 'CA'
        });

        expect(result).toEqual(expected);
  });

  test('returns clinics with availability on the provided date', () => {
    const result = searchClinics({ availability: '2022-04-10' }, clinics);
    const expected = clinics.filter(clinic => {
      const { from, to } = clinic.availability || clinic.opening || {};
      return from && to && from <= '2022-04-10' && '2022-04-10' <= to;
    });

    expect(result).toEqual(expected);
  });

  test('returns clinics with matching name and state', () => {
    const result = searchClinics({ name: 'Medical', state: 'CA' }, clinics);
    const expected = clinics.filter(clinic => {
        let clinicName = clinic.name || clinic.clinicName
        let clinicState = clinic.stateName || clinic.stateCode  
        return /medical/i.test(clinicName) && clinicState === 'CA'
    });
    
    expect(result).toEqual(expected);
  });

  test('returns clinics with matching name and availability', () => {
    const result = searchClinics({ name: 'Medical', availability: '2022-04-10' }, clinics);
    const expected = clinics.filter(clinic => {
        let clinicName = clinic.name || clinic.clinicName
        const { from, to } = clinic.availability || clinic.opening || {};
        return /medical/i.test(clinicName) && from && to && from <= '2022-04-10' && '2022-04-10' <= to
    });

    expect(result).toEqual(expected);
  });

  test('returns clinics in the provided state and availability', () => {
    const result = searchClinics({ state: 'CA', availability: '2022-04-10' }, clinics);
    const expected = clinics.filter(clinic => {
        let clinicState = clinic.stateName || clinic.stateCode 
        const { from, to } = clinic.availability || clinic.opening || {};
        return clinicState === 'CA' && from && to && from <= '2022-04-10' && '2022-04-10' <= to;
    });

    expect(result).toEqual(expected);
  });
});