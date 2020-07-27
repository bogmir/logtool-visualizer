const express = require('express');
const router = express.Router();

const {answerChartData} = require('../processing');


router.get('/', function(req, res, next) {
  res.json(answerChartData);
});

module.exports = router;
