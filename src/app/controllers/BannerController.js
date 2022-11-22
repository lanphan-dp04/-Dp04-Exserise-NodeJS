const Banner = require("../models/Banner");
const jwt = require("jsonwebtoken");

class BannerControllor {
  get(req, res, next) {
    Banner.find({})
    .then(banner => {
      res.json(banner)
    })
    .catch(next)
  }
  }

module.exports = new BannerControllor();
