const express = require('express');

const router = express.Router();

const slideBarControllor = require('../app/controllers/SlideBarController');

router.get('/api', slideBarControllor.get)
router.get('/list', slideBarControllor.show)
router.post('/store', slideBarControllor.store)

module.exports = router;