const express = require('express');

const router = express.Router();

const loginControllor = require('../app/controllers/LoginController');

router.get('/', loginControllor.get)
router.post('/', loginControllor.post)

module.exports = router;