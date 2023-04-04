

const helmet = require('helmet');
const express = require('express');
const csrf = require('csrf');
const clinicRoutes = require('./routes/clinicRoutes');

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use('/clinics', clinicRoutes);
app.use(helmet({
  contentSecurityPolicy: false,
  csrf: true
}));

module.exports = app;
