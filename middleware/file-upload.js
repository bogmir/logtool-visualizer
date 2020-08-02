const multer = require('multer');

const fileUpload = multer({ 
    limits: 20000000,
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'resources');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' +file.originalname );
        }
    }),
    fileFilter: (req, file, cb) => {
        const isValid = file.mimetype === 'application/json';
        let error = isValid ? null : new Error("Invalid mime type!");
        cb(error, isValid);
    }
});

module.exports = (req, res, next) => {
    fileUpload.single('file')(req, res, function (err) {
      //Catching and handling errors of multer
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      //Everything is ok
      next();
    })
}
