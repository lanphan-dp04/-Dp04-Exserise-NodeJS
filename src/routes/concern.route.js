const express = require('express');

const router = express.Router();

const concernControllor = require('../app/controllers/ConcernController');
const { checkAuth } = require('../util');

router.get('/api/', concernControllor.get)
router.get('/list',checkAuth, concernControllor.show)
router.post('/create', concernControllor.create)
router.get('/:id/edit', concernControllor.edit)
router.put('/:id', concernControllor.update)
router.delete('/:id', concernControllor.delete)

module.exports = router;