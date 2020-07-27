const express = require('express');
const router = express.Router();

const {answerSizeChartData} = require('../src/processing/processing');


router.get('/', function(req, res, next) {
  res.json(answerSizeChartData);
});

module.exports = router;
