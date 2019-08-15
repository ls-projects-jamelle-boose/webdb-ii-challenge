const express = require("express"),
  router = express.Router();

router.use("/cars", require("./cars"));

module.exports = router;
