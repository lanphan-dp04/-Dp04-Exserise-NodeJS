const Campus = require("../models/Campus");
const jwt = require("jsonwebtoken");

class CampusControllor {
  get(req, res, next) {
    Campus.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }
  show(req, res, next) {
    Campus.find({})
      .then((data) => {
        res.render("campus/show", { data });
      })
      .catch(next);
  }
  create(req, res, next) {
    const formData = req.body;
    const data = new Campus(formData);
    data
      .save()
      .then(() => res.redirect("/campus/list"))
      .catch(next);
  }
  edit(req, res, next) {
    Campus.findById(req.params.id)
      .then((data) => {
        data = data.toObject();
        res.render("campus/edit", { data });
      })
      .catch(next);
  }
  update(req, res, next) {
    Campus.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/campus/list"))
      .catch(next);
  }
  delete(req, res, next) {
    Campus.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CampusControllor();
