const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const db = require("./config/db");
let cors = require("cors");
const google = require('googleapis');
const cookieParser = require("cookie-parser");
const app = express()
const port = 5000

const route = require("./routes/index.route");
const { checkAuth } = require("./util");
app.use(express.static(path.join(__dirname, "public")));
app.use('/asset', express.static('./asset'))

//connect db
db.connect();

app.use(cookieParser());

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//Template engine
const hbs = handlebars.engine({
  extname: ".hbs",
  helpers: {
    sum: (a, b) => a + b,
  },
});
app.engine("hbs", hbs);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//HTTP logger
app.use(morgan("combined"));

app.get("/",checkAuth, (req, res) => {
  res.render("home");
});

route(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});