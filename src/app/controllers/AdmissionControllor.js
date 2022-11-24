const Admission = require("../models/Admission");
const jwt = require("jsonwebtoken");

class AdmissionControllor {
  get(req, res, next) {
    Admission.find({})
      .then((banner) => {
        // banners = banners.map(banner => banner.toObject())
        res.json(banner);
      })
      .catch(next);
  }
  // get(req, res, next) {
  //   BannerCommon.findOne({id: req.params.id})
  //   .then(banners => {
  //     banners = banners.map(banner => banner.toObject())
  //     res.json(banner)
  //   })
  //   .catch(next)
  // }
  show(req, res, next) {
    Admission.find({})
      .then((data) => {
        res.render("admission/show", { data });
      })
      .catch(next);
  }
  create(req, res, next) {
    const formData = req.body;
    const data = new Admission(formData);
    data
      .save()
      .then(() => res.redirect("/admission/list"))
      .catch(next);
  }
  edit(req, res, next) {
    Admission.findById(req.params.id)
      .then((data) => {
        data = data.toObject();
        res.render("admission/edit", { data });
        console.log(data);
      })
      .catch(next);
  }
  update(req, res, next) {
    Admission.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/admission/list"))
      .catch(next);
  }
  delete(req, res, next) {
    Admission.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new AdmissionControllor();
