var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index)


router.post('/', skillsCtrl.add)

router.post('/:id', skillsCtrl.delete);

router.get('/:id', skillsCtrl.show)

router.get('/new', skillsCtrl.new)

router.get('/:id/edit', skillsCtrl.edit);

router.post('/:id/update', skillsCtrl.update);

module.exports = router;