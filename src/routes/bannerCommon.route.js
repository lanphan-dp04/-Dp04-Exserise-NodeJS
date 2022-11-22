const express = require('express');

const router = express.Router();

const bannerCommonControllor = require('../app/controllers/BannerCommonControllor');

router.get('/api/:id', bannerCommonControllor.get)

module.exports = router;