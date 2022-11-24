// const express = require("express");
// // const upload = require('.')
// const cloudinary = require('../util/cloudinary')
// const fs = require('fs');
// const upload = require("../util/multer");

// const app = express()

// const uploadCloud = app.use('/upload-images', upload.array('image'), async(req,res) => {

//   const uploader = async (path) => await cloudinary.uploads(path, 'Images')
//   if(req.method === 'POST') {
//     const urls = []
//     const files = req.files
//     for(const file of files) {
//       const {path} = file
//       const newPath = await uploader(path)
//       console.log(newPath)
//       urls.push(newPath)
//       fs.unlinkSync(path)
//     }
//     res.status(200).json({
//       message: 'images uploaded successfully',
//       data: urls,
//     })
//   }
//     else {
//       res.status(405).json({
//         err: `${req.method} method not allowed`
//       })
//     }
// })
// module.exports = uploadCloud;

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png'],
  param: {
    folder: 'devplus_image'
  }
});
const uploadCloud = multer({ storage });
module.exports = uploadCloud;