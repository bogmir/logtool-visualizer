const multer = require('multer');
const DEST_PATH = 'uploads';
const FILE_SIZE_LIMIT = 20000000;

const fileUpload = multer({ 
    limits: FILE_SIZE_LIMIT,
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, DEST_PATH);
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
      //Catching and handling multer's errors
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      next();
    })
}
