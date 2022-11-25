const MustHave = require("../models/MustHave");
const jwt = require("jsonwebtoken");

class MustHaveControllor {
  get(req, res, next) {
    MustHave.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }
  show(req, res, next) {
    MustHave.find({})
      .then((data) => {
        res.render("havemust/show", { data });
      })
      .catch(next);
  }
  //trash
  trash(req, res, next) {
    MustHave.findDeleted({})
      .then((data) => {
        res.render("havemust/trash", { data });
      })
      .catch(next);
  }
  create(req, res, next) {
    req.body.icon = req.file.path;
    const formData = req.body;
    const data = new MustHave(formData);
    data
      .save()
      .then(() => res.redirect("/must-have/list"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    MustHave.findById(req.params.id)
      .then((data) => {
        data = data.toObject();
        res.render(`havemust/edit`, { data });
      })
      .catch(next);
  }
  update(req, res, next) {
    req.body.icon = req.file.path;
    MustHave.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/must-have/list"))
      .catch(next);
  }
  delete(req, res, next) {
    MustHave.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //forceDelete
  forceDelete(req, res, next) {
    MustHave.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //restore
  restore(req, res, next) {
    MustHave.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new MustHaveControllor();
