const BannerCommon = require("../models/BannerCommon");
const jwt = require("jsonwebtoken");

class BannerCommonControllor {
  get(req, res, next) {
    BannerCommon.findOne({id: req.params.id})
    .then(banner => {
      // banners = banners.map(banner => banner.toObject())
      res.json(banner)
    })
    .catch(next)
  }
  }

module.exports = new BannerCommonControllor();
