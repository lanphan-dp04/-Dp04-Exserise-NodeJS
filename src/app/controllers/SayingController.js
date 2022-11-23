const Saying = require("../models/Saying");
const jwt = require("jsonwebtoken");

class SayingControllor {
  get(req, res, next) {
    Saying.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new SayingControllor();
