const express = require('express');

const router = express.Router();

const admissionControllor = require('../app/controllers/AdmissionControllor');

router.get('/api', admissionControllor.get)

module.exports = router;