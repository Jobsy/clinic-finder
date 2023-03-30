
function searchClinics({ name, state, availability }, clinicsData) {
  let result = clinicsData;

  if (name) {
    const nameRegex = new RegExp(name, 'i');
    result = result.filter((clinic) => nameRegex.test(clinic.name || clinic.clinicName));
  }

  if (state) {
    result = result.filter((clinic) => {
      let clinicState = clinic.stateName || clinic.stateCode 
      return clinicState.toLowerCase() === state.toLowerCase()
    });
  }

  if (availability) {
    result = result.filter((clinic) => {
      const { from, to } = clinic.availability || clinic.opening || {};
      return from && to && from <= availability && availability <= to;
    });
  }

  return result;
}

module.exports = searchClinics;

