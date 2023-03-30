
const express = require('express');
const clinicRoutes = require('./routes/clinicRoutes');

const app = express();

app.use('/clinics', clinicRoutes);

module.exports = app;
