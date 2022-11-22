const United = require("../models/United");
const jwt = require("jsonwebtoken");

class UnitedControllor {
  get(req, res, next) {
    United.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new UnitedControllor();
