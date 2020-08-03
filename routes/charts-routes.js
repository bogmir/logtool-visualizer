const express = require('express');
const router = express.Router();

router.get('/requests', function(req, res, next) {
    res.json(req.session.chartData.requestMethodChartData);
});

router.get('/answers', function(req, res, next) {
    res.json(req.session.chartData.answerChartData);
});

router.get('/requests-per-min', function(req, res, next) {
    res.json(req.session.chartData.requestsPerMinuteChartData);
});

router.get('/short-answers', function(req, res, next) {
    res.json(req.session.chartData.answerSizeChartData);
});

module.exports = router;