const express = require('express');

const router = express.Router();

const partnerControllor = require('../app/controllers/PartnerController');

router.get('/api', partnerControllor.get)

module.exports = router;