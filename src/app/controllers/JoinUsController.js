const JoinUs = require("../models/JoinUs");
const jwt = require("jsonwebtoken");

class JoinUsControllor {
  get(req, res, next) {
    JoinUs.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new JoinUsControllor();
