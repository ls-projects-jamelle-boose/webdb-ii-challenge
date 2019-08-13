const express = require("express"),
  cars = require("../controllers/cars"),
  router = express.Router();

router.get("/", cars.all);
router.post("/", cars.new);
router.get("/:id", cars.one);
router.delete("/:id", cars.rm);
router.put("/:id", cars.update);

module.exports = router;
