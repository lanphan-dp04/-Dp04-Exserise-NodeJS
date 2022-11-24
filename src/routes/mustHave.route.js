const express = require('express');

const router = express.Router();

const mustHaveControllor = require('../app/controllers/MustHaveController');

router.get('/api', mustHaveControllor.get)
router.get('/list', mustHaveControllor.show)
router.post('/create', mustHaveControllor.create)
router.get('/:id/edit', mustHaveControllor.edit)
router.put('/:id', mustHaveControllor.update)
router.delete('/:id', mustHaveControllor.delete)


module.exports = router;