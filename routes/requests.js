const express = require('express');
const router = express.Router();

const {requestMethodChartData} = require('../src/processing/processing');


router.get('/', function(req, res, next) {
  res.json(requestMethodChartData);
});

module.exports = router;
