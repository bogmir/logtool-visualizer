const express = require('express');
const router = express.Router();

/* const {requestMethodChartData, answerChartData, requestsPerMinuteChartData, answerSizeChartData} 
    = require('../controllers/processing');
 */
const {getChartData} = require('../controllers/processing');

router.get('/requests', function(req, res, next) {
  console.log("from without"+getChartData.requestMethodChartData);  
  res.json(getChartData().requestMethodChartData);
});

router.get('/answers', function(req, res, next) {
    res.json(getChartData().answerChartData);
});

router.get('/requests-per-minute', function(req, res, next) {
    res.json(getChartData().requestsPerMinuteChartData);
});

router.get('/short-answers', function(req, res, next) {
    res.json(getChartData().answerSizeChartData);
});

module.exports = router;