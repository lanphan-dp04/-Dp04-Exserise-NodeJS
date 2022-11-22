const express = require('express');

const router = express.Router();

const joinUsControllor = require('../app/controllers/JoinUsController');

router.get('/api', joinUsControllor.get)

module.exports = router;