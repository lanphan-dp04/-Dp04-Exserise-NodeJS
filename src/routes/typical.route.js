const express = require('express');

const router = express.Router();

const typicalControllor = require('../app/controllers/TypicalController');

router.get('/api/', typicalControllor.get)

module.exports = router;