const SlideBar = require("../models/SlideBar");
const jwt = require("jsonwebtoken");

class SlideBarControllor {
  get(req, res, next) {
    SlideBar.find({})
    .then(data => {
      res.json(data)
    })
    .catch(next)
  }
  show(req, res, next) {
    SlideBar.find({})
    .then(data => {
      res.render('banner/show',data[0].images)
    })
    .catch(next)
  }

  store(req, res, next) {
    const formData = req.body;
    const banner = new Banner(formData);
    banner.save()
      .then(() => res.redirect('/banner/list'))
      .catch(error => {
      })
  }
}

module.exports = new SlideBarControllor();
