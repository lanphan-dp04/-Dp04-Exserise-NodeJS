const express = require('express');

const router = express.Router();

const meetTeamControllor = require('../app/controllers/MeetTeamControllor');

router.get('/api', meetTeamControllor.get)

module.exports = router;