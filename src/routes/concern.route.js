const express = require('express');

const router = express.Router();

const concernControllor = require('../app/controllers/ConcernController');

router.get('/api/', concernControllor.get)

module.exports = router;