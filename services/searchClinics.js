
function searchClinics ({ name, state, availability }, clinicsData) {
  let result = clinicsData;

  // If the name query parameter is present, filter the data by clinics that contain the name in their name or clinicName property
  if (name && /^[a-zA-Z0-9\s\-.,()]+$/.test(name) && name.length <= 50) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const nameRegex = new RegExp(escapedName, 'i');
    result = result.filter((clinic) => nameRegex.test(clinic.name || clinic.clinicName));
  }


  // If the state query parameter is present, filter the data by clinics located in the state specified
  if (state) {
    result = result.filter((clinic) => {
      const clinicState = clinic.stateName || clinic.stateCode;
      return clinicState.toLowerCase() === state.toLowerCase();
    });
  }

  // If the availability query parameter is present, filter the data by clinics that have availability during the specified time
  if (availability) {
    result = result.filter((clinic) => {
      const { from, to } = clinic.availability || clinic.opening || {};
      return from && to && from <= availability && availability <= to;
    });
  }

  return result; // Return the filtered clinics data
}

module.exports = searchClinics;
