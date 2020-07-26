const express = require('express');
const router = express.Router();

const {answerSizeChartData} = require('../processing');


router.get('/', function(req, res, next) {
  res.json(answerSizeChartData);
});

module.exports = router;
