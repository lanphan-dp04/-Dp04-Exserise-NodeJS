const loginRouter = require('../routes/login.route');
const slideBarRouter = require('./slideBar.route');
const aboutRouter = require('./about.route');
const admissionRouter = require('./admission.route');
const sayingRouter = require('./saying.route');
const campusRouter = require('../routes/campus.route');
const concernRouter = require('./concern.route');
function route(app) {
  app.use('/login', loginRouter);
  app.use('/slideBar', slideBarRouter);
  app.use('/about', aboutRouter);
  app.use('/admission', admissionRouter);
  app.use('/saying', sayingRouter);
  app.use('/campus', campusRouter);
  app.use('/concern', concernRouter);
}

module.exports = route;
