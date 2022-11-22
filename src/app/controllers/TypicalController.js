const Typical = require("../models/Typical");
const jwt = require("jsonwebtoken");

class TypicalController {
  get(req, res, next) {
    Typical.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new TypicalController();
