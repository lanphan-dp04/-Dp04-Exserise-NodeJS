const User = require("../models/User");
const jwt = require("jsonwebtoken");

class UserControllor {
  get(req, res, next) {
    res.render("login/login");
  }

  post(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({
      username: username,
      password: password,
    })
      .then((data) => {
        if (data) {
          const token = jwt.sign({ _id: data._id }, "pass");
          return res
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200)
            .redirect("/");
        } else {
          return res.redirect("/login");
        }
      })
      .catch(next);
  }
  delete(req, res, next) {
    console.log(req.cookies);
    if (req.cookies.access_token) {
      res
        .cookie("access_token", "", {
          httpOnly: true,
        })
        .status(200)
        .redirect("/login");
    } else {
      return res.redirect("/login");
    }
  }
}

module.exports = new UserControllor();
