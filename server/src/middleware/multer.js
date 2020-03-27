const path = require('path');
/*
const fs = require('fs');
*/
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
/*    fs.existsSync('')
    fs.mkdirSync('')*/
    cb(null, path.resolve(__dirname, `./../../uploads/${ file.fieldname }`));
  },
  filename: function (req, file, cb) {

    const extension = path.extname(file.originalname);
    const newFileName = `${ Date.now() }${ extension }`;
    cb(null, newFileName);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;