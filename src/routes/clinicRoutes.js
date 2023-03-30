
const express = require('express');
const clinicController = require('../controllers/clinicController');

const router = express.Router();
router.get('/', clinicController.getClinics);

module.exports = router;
