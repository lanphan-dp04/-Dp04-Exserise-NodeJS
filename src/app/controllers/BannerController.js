const Banner = require("../models/Banner");
const jwt = require("jsonwebtoken");

class BannerControllor {
  get(req, res, next) {
    {console.log(Banner);}
    Banner.find({})
    .then(banner => {
      // banners = banners.map(banner => banner.toObject())
      res.json(banner)
    })
    .catch(next)
  }
  }

module.exports = new BannerControllor();
