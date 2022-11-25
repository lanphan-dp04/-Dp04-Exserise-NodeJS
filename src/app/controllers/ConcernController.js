const Concern = require("../models/Concern");
const jwt = require("jsonwebtoken");

class ConcernController {
  get(req, res, next) {
    Concern.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }
  show(req, res, next) {
    Concern.find({})
      .then((data) => {
        res.render("concern/show", { data });
      })
      .catch(next);
  }
  // trash
  trash(req, res, next) {
    Concern.findDeleted({})
      .then((data) => {
        res.render("concern/trash", { data });
      })
      .catch(next);
  }
  create(req, res, next) {
    const formData = req.body;
    const data = new Concern(formData);
    data
      .save()
      .then(() => res.redirect("/concern/list"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    Concern.findById(req.params.id)
      .then((data) => {
        data = data.toObject();
        res.render("concern/edit", { data });
      })
      .catch(next);
  }
  update(req, res, next) {
    Concern.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/concern/list"))
      .catch(next);
  }
  delete(req, res, next) {
    Concern.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //forceDelete
  forceDelete(req, res, next) {
    Concern.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //restore
  restore(req, res, next) {
    Concern.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new ConcernController();
