const express = require('express');

const router = express.Router();

const campusControllor = require('../app/controllers/CampusControllor');

router.get('/api', campusControllor.get)

module.exports = router;