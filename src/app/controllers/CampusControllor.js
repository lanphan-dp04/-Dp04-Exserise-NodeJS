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
    req.body.avatar = 'http://localhost:5000/'+req.file.path.split('\\').slice(2).join('/');
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
    req.body.avatar = 'http://localhost:5000/'+req.file.path.split('\\').slice(2).join('/');
    Campus.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/campus/list"))
      .catch(next);
  }
  delete(req, res, next) {
    Campus.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // xoa vinh vien
  forceDelete(req, res, next) {
    Campus.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  trash(req, res, next) {
    Campus.findDeleted({})
      .then((data) => {
        res.render("campus/trash", { data });
      })
      .catch(next);
  }
  //restore
  restore(req, res, next) {
    Campus.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CampusControllor();
