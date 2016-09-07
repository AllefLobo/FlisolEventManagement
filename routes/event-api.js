var express = require("express");
var router = express.Router();

router.post("/event", function (req, res) {
   res.json({stub: 1});
});

module.exports = router;