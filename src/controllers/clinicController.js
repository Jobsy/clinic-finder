
const searchClinics = require('../../services/searchClinics');
const clinicsData = require('../../data/clinicData');

function getClinics (req, res) {
  const clinics = searchClinics(req.query, clinicsData);
  res.json(clinics);
}

module.exports = {
  getClinics
};
