const {processFile, getChartData} = require('./processing');
const fileController = async (req, res, next) => {

    //do the file processing to get chart data objects
    await processFile(req.file.path);
    //store chart data in express session 
    req.session.chartData = await getChartData();

    return res.status(200).send({
        filename: req.file.originalname
    });
};

exports.fileController = fileController;