const About = require("../models/About");
const jwt = require("jsonwebtoken");

class AboutController {
  get(req, res, next) {
    About.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new AboutController();
