const express = require('express');

const router = express.Router();

const sayingControllor = require('../app/controllers/SayingController');

router.get('/api', sayingControllor.get)

module.exports = router;