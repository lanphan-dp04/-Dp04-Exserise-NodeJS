const Campus = require("../models/Campus");
const jwt = require("jsonwebtoken");

class CampusControllor {
  get(req, res, next) {
    Campus.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new CampusControllor();
