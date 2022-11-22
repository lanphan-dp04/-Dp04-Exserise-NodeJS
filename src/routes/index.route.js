const loginRouter = require('../routes/login.route');
const bannerRouter = require('../routes/banner.route');
const partnerRouter = require('../routes/partner.route');
const bannerCommonRouter = require('../routes/bannerCommon.route');
const unitedRouter = require('../routes/united.route');
const meetTeamRouter = require('../routes/meetTeam.route');
const mustHaveRouter = require('../routes/musHave.route');
const typicalRouter = require('../routes/typical.route');
const joinUsRouter = require('../routes/joinUs.route');
function route(app) {
  app.use('/login', loginRouter);
  app.use('/banner', bannerRouter);
  app.use('/partner', partnerRouter);
  app.use('/bannerCommon', bannerCommonRouter);
  app.use('/united', unitedRouter);
  app.use('/meetTeam', meetTeamRouter);
  app.use('/mustHave', mustHaveRouter);
  app.use('/typical', typicalRouter);
  app.use('/joinUs', joinUsRouter);
}

module.exports = route;
