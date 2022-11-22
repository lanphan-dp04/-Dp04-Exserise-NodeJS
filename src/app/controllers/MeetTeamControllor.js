const MeetTeam = require("../models/MeetTeam");
const jwt = require("jsonwebtoken");

class MeetTeamControllor {
  get(req, res, next) {
    MeetTeam.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new MeetTeamControllor();
