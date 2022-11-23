const express = require('express');

const router = express.Router();

const aboutControllor = require('../app/controllers/AboutController');

router.get('/api', aboutControllor.get)

module.exports = router;