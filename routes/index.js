const express = require('express');
const router = express.Router();
const path = require('path');
const {processFile, getChartData} = require('../controllers/processing');

/* GET home page. */
router.get('/', async (req, res, next) => {
  //process default file to get chart data objects
  await processFile();
  //store chart data in express session 
  req.session.chartData = await getChartData();

  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

module.exports = router;