const express = require('express');

const router = express.Router();

const mustHaveControllor = require('../app/controllers/MustHaveControllor');

router.get('/api', mustHaveControllor.get)

module.exports = router;