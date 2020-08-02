const express = require('express');
const router = express.Router();

const fileUpload = require('../middleware/file-upload');
const uploadController = require('../controllers/upload_controllers');

router.post('/',
  fileUpload,
  uploadController.fileController
);

module.exports = router;