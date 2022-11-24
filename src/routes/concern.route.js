const express = require('express');

const router = express.Router();

const concernControllor = require('../app/controllers/ConcernController');

router.get('/api/', concernControllor.get)
router.get('/api', concernControllor.get)
router.get('/list', concernControllor.show)
router.post('/create', concernControllor.create)
router.get('/:id/edit', concernControllor.edit)
router.put('/:id', concernControllor.update)
router.delete('/:id', concernControllor.delete)

module.exports = router;