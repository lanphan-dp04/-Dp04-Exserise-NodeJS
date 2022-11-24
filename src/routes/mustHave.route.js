const express = require('express');

const router = express.Router();

const mustHaveControllor = require('../app/controllers/MustHaveController');
const upload = require('../util/multer');

router.get('/api', mustHaveControllor.get)
router.get('/list', mustHaveControllor.show)
router.post('/create',upload.single('icon'), mustHaveControllor.create)
router.get('/:id/edit', mustHaveControllor.edit)
router.put('/:id',upload.single('icon'), mustHaveControllor.update)
router.delete('/:id', mustHaveControllor.delete)


module.exports = router;