
const https = require('https');

const fetchClinics = () => {
  const clinics = [];

  const urls = [
    'https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json',
    'https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json'
  ];

  urls.forEach((url) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        clinics.push(...JSON.parse(data));
        console.log(`Fetched clinics from ${url}`);
      });
    }).on('error', (err) => {
      console.log(`Error fetching clinics from ${url}: ${err.message}`);
    });
  });

  return clinics;
};

module.exports = fetchClinics();

