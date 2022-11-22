const MustHave = require("../models/MustHave");
const jwt = require("jsonwebtoken");

class MustHaveControllor {
  get(req, res, next) {
    MustHave.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new MustHaveControllor();
