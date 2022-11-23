const Concern = require("../models/Concern");
const jwt = require("jsonwebtoken");

class ConcernController {
  get(req, res, next) {
    Concern.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new ConcernController();
