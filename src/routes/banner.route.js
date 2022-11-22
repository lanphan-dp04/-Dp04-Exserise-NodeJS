const express = require('express');

const router = express.Router();

const bannerControllor = require('../app/controllers/BannerController');

router.get('/api', bannerControllor.get)

module.exports = router;