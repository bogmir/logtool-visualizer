const express = require('express');
const router = express.Router();

const {answerChartData} = require('../src/processing/processing');


router.get('/', function(req, res, next) {
  res.json(answerChartData);
});

module.exports = router;
