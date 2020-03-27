const router = require('express').Router();
const upload = require('./../middleware/multer.js');
const userController = require('../controllers/user.controller.js');

router.post('/sign_up',
  upload.single('profilePicture'),
  (req, res, next) => {

    req.body.profilePicture = req.file.filename;
    next();
  },
  userController.createUser);

module.exports = router;