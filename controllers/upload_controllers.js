const {processFile} = require('./processing');
const fileController = async (req, res, next) => {
    //do the processing to send the right signal back
    await processFile(req.file.path);

    return res.status(200).send({
        filename: req.file.originalname
    });
};

exports.fileController = fileController;