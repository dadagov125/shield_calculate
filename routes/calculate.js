var express = require('express');
var router = express.Router();

/* POST calculate shields */
router.post('/', function(req, res, next) {
  res.send(req.body);
});

module.exports = router;
