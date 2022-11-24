const express = require('express');
const multer  = require('multer')
//const upload = multer({ dest: './src/public/asset/' })
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/public/asset/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})

var upload = multer({ storage: storage });

const router = express.Router();

const sayingControllor = require('../app/controllers/SayingController');

router.get('/api', sayingControllor.get)
router.get('/list', sayingControllor.show)
router.post('/create', sayingControllor.create)
router.get('/:id/edit', sayingControllor.edit)
router.put('/:id', upload.single('imageAvatar'), sayingControllor.update)
router.delete('/:id', sayingControllor.delete)

module.exports = router;