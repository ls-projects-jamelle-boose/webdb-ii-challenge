const express = require('express'),
  cars = require('../controllers/cars'),
  router = express.Router();

router.get('/', cars.all);
router.get('/:id', cars.one);
router.post('/', cars.new);
router.delete('/:id', cars.delete);
router.put('/:id', cars.update);

module.exports = router;
