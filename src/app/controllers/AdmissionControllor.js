const Admission = require("../models/Admission");
const jwt = require("jsonwebtoken");

class AdmissionControllor {
  get(req, res, next) {
    Admission.find({})
    .then(banner => {
      // banners = banners.map(banner => banner.toObject())
      res.json(banner)
    })
    .catch(next)
  }
  // get(req, res, next) {
  //   BannerCommon.findOne({id: req.params.id})
  //   .then(banners => {
  //     banners = banners.map(banner => banner.toObject())
  //     res.json(banner)
  //   })
  //   .catch(next)
  // }

}

module.exports = new AdmissionControllor();
