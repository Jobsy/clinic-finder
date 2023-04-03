
const express = require('express');
const clinicRoutes = require('./routes/clinicRoutes');

const app = express();

app.use('/clinics', clinicRoutes);
app.use(`/.netlify/functions/app`, clinicRoutes);

module.exports = app;
module.exports.handler = serverless(app);

