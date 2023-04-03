
const express = require('express');
const serverless = require("serverless-http");
const clinicRoutes = require('./routes/clinicRoutes');

const app = express();

app.use('/clinics', clinicRoutes);
app.use(`/.netlify/functions/app`, clinicRoutes);

module.exports = app;
module.exports.handler = serverless(app);

