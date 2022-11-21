const loginRouter = require('../routes/login.route');
function route(app) {
  app.use('/login', loginRouter);
}

module.exports = route;
