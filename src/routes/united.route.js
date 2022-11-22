const express = require('express');

const router = express.Router();

const uintedControllor = require('../app/controllers/UnitedController');

router.get('/api', uintedControllor.get)

module.exports = router;