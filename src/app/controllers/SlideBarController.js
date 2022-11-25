const SlideBar = require("../models/SlideBar");
const jwt = require("jsonwebtoken");

class SlideBarControllor {
  get(req, res, next) {
    SlideBar.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }
  show(req, res, next) {
    SlideBar.find({})
      .then((data) => {
        res.render("banner/show", { data });
      })
      .catch(next);
  }
  // trash
  trash(req, res, next) {
    SlideBar.findDeleted({})
      .then((data) => {
        res.render("banner/trash", { data });
      })
      .catch(next);
  }

  create(req, res, next) {
    req.body.src = req.file.path;
    const formData = req.body;
    const data = new SlideBar(formData);
    data
      .save()
      .then(() => res.redirect("/slideBar/list"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    SlideBar.findById(req.params.id)
      .then((data) => {
        data = data.toObject();
        res.render(`banner/edit`, { data });
      })
      .catch(next);
  }
  update(req, res, next) {
    req.body.src = req.file.path;
    SlideBar.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/slideBar/list"))
      .catch(next);
  }
  delete(req, res, next) {
    SlideBar.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // force
  forceDelete(req, res, next) {
    SlideBar.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // restore
  restore(req, res, next) {
    SlideBar.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new SlideBarControllor();
