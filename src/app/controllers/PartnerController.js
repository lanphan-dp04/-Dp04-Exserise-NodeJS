const Partner = require("../models/Partner");
const jwt = require("jsonwebtoken");

class PartnerController {
  get(req, res, next) {
    Partner.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  }

module.exports = new PartnerController();
