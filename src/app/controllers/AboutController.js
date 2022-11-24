const About = require("../models/About");
const jwt = require("jsonwebtoken");

class AboutController {
  get(req, res, next) {
    About.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }

  show(req, res, next) {
    About.find({})
      .then((data) => {
        res.render("about/show", { data });
      })
      .catch(next);
  }
  create(req, res, next) {
    const formData = req.body;
    const data = new About(formData);
    data
      .save()
      .then(() => res.redirect("/about/list"))
      .catch(next);
  }
  edit(req, res, next) {
    About.findById(req.params.id)
      .then((data) => {
        data = data.toObject();
        res.render("about/edit", { data });
      })
      .catch(next);
  }
  update(req, res, next) {
    About.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/about/list"))
      .catch(next);
  }
  delete(req, res, next) {
    About.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new AboutController();
