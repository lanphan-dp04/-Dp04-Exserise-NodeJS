const loginRouter = require('../routes/login.route');
const bannerRouter = require('../routes/banner.route');
function route(app) {
  app.use('/login', loginRouter);
  app.use('/banner', bannerRouter);
}

module.exports = route;
