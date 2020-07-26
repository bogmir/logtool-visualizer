const express = require('express');
const router = express.Router();

const {requestMethodChartData} = require('../processing');


router.get('/', function(req, res, next) {
  res.json(requestMethodChartData);
});

module.exports = router;
