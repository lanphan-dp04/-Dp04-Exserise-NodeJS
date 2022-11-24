const MustHave = require("../models/MustHave");
const jwt = require("jsonwebtoken");

class MustHaveControllor {
  get(req, res, next) {
    MustHave.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  show(req, res, next) {
    MustHave.find({})
    .then(data => {
      res.render('havemust/show',{data})
    })
    .catch(next)
  }
  create(req, res, next) {
    req.body.icon = 'http://localhost:5000/'+req.file.path.split('\\').slice(2).join('/');
    const formData = req.body;
    const data = new MustHave(formData);
    data.save()
      .then(() => res.redirect('/must-have/list'))
      .catch(error => {
      })
  }
  edit(req, res, next) {
    MustHave.findById(req.params.id)
    .then(data => {
      data = data.toObject();
      res.render(`havemust/edit`,{data})
    })
    .catch(next)
  }
  update(req, res, next) {
    req.body.icon = 'http://localhost:5000/'+req.file.path.split('\\').slice(2).join('/');
    MustHave.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/must-have/list'))
    .catch(next)
  }
  delete( req, res, next) {
    MustHave.deleteOne({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }

}

module.exports = new MustHaveControllor();
