const Saying = require("../models/Saying");
const jwt = require("jsonwebtoken");

class SayingControllor {
  get(req, res, next) {
    Saying.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  show(req, res, next) {
    Saying.find({})
    .then(data => {
      res.render('saying/show',{data})
    })
    .catch(next)
  }
  create(req, res, next) {
    req.body.imageAvatar = 'http://localhost:5000/'+req.file.path.split('\\').slice(2).join('/');
    const formData = req.body;
    const data = new Saying(formData);
    data.save()
      .then(() => res.redirect('/saying/list'))
      .catch(next)
  }
  edit(req, res, next) {
    Saying.findById(req.params.id)
    .then(data => {
      data = data.toObject();
      res.render('saying/edit',{data})
    })
    .catch(next)
  }
  update(req, res, next) {
    req.body.imageAvatar = 'http://localhost:5000/'+req.file.path.split('\\').slice(2).join('/');
    Saying.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/saying/list'))
    .catch(next)
  }
  delete( req, res, next) {
    Saying.deleteOne({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

module.exports = new SayingControllor();
