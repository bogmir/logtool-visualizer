const express = require('express');
const router = express.Router();

const {requestsPerMinuteChartData} = require('../src/processing/processing');


router.get('/', function(req, res, next) {
  res.json(requestsPerMinuteChartData);
});

module.exports = router;
