
const https = require('https');
const winston = require('winston');

// Configure winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' })
  ]
});

const fetchClinics = () => {
  const clinics = [];

  // Define an array of URLs to fetch the data from
  const urls = [
    'https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json',
    'https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json'
  ];

  // Loop through each URL and make an HTTPS GET request to fetch the data
  urls.forEach((url) => {
    https.get(url, (res) => {
      let data = '';

      // Listen for 'data' events and append the data to the 'data' variable
      res.on('data', (chunk) => {
        data += chunk;
      });

      // Listen for the 'end' event, parse the data and add it to the clinics array
      res.on('end', () => {
        clinics.push(...JSON.parse(data));
        logger.info(`Fetched clinics from ${url}`);
      });
    }).on('error', (err) => {
      // Listen for 'error' events and log any errors that occur
      logger.error(`Error fetching clinics from ${url}: ${err.message}`);
    });
  });

  // Return the clinics array, which may be empty if the HTTPS requests are still in progress
  return clinics;
};

module.exports = fetchClinics();
