const express = require("express"),
  router = express.Router();

router.use("/", require("./cars"));

module.exports = router;
