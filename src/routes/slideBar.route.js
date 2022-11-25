const express = require('express');

const router = express.Router();

const slideBarControllor = require('../app/controllers/SlideBarController');
const upload = require('../util/multer');

router.get('/api', slideBarControllor.get)
router.get('/list', slideBarControllor.show)
router.post('/create',upload.single('src'), slideBarControllor.create)
router.get('/:id/edit', slideBarControllor.edit)
router.put('/:id',upload.single('src'), slideBarControllor.update)
router.delete('/:id', slideBarControllor.delete)

module.exports = router;