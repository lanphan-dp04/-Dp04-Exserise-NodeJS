const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const db = require("./config/db");
let cors = require("cors");
const google = require('googleapis');
const upload = require('./util/multer')
const cloudinary = require('./util/cloudinary')
const fs = require('fs')
// const {uploadFile} = require('./app/models/Upload');
const app = express()
const port = 5000

const route = require("./routes/index.route");
const { log } = require("console");
app.use(express.static(path.join(__dirname, "public")));
// uploadFile();

//connect db
db.connect();

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

// app.get("/", (req, res) => {
//   res.render("home");
// });
app.use('/upload-images', upload.array('image'), async(req,res) => {

  const uploader = async (path) => await cloudinary.uploads(path, 'Images')
  if(req.method === 'POST') {
    const urls = []
    const files = req.files
    for(const file of files) {
      const {path} = file
      const newPath = await uploader(path)
      console.log(newPath)
      urls.push(newPath)
      fs.unlinkSync(path)
    }
    res.status(200).json({
      message: 'images uploaded successfully',
      data: urls,
    })
  }
    else {
      res.status(405).json({
        err: `${req.method} method not allowed`
      })
    }
})
// route innit
// route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
