const express = require('express');
const { logout } = require('../app/controllers/LoginController');

const router = express.Router();

const loginControllor = require('../app/controllers/LoginController');
const { checkAuth, isAuth } = require('../util');

router.post('/delete', loginControllor.delete)
router.get('/',isAuth, loginControllor.get)

router.post('/',isAuth, loginControllor.post)

module.exports = router;