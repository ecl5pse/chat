const { BadRequestError } = require('../utils/errors');
const { User } = require('./../models');

module.exports.createUser = async (req, res, next) => {

  try {

    const user =  new User(req.body)
    const newUser = await user.save()
    if (newUser) {

      delete newUser.password;
      return res.status(201).send(newUser);
    }
    next(new BadRequestError());
  } catch (e) {
    next(e);
  }
};

module.exports.getUser = async (req, res) => res.send(req.user)



module.exports.savePicture = (req, res, next) => {

  req.body.profilePicture = req.file.filename;
  next();
}