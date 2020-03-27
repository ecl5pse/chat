const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { PROFILE_PICTURE_PATH } = require('../constants');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  login: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    match: /^\w{6,16}$/,
  },
  password: {
    type: Schema.Types.String,
    required: true,
    select: false,
  },
  profilePicture: {
    type: Schema.Types.String,
    get: value => `${ PROFILE_PICTURE_PATH }/${ value }`,
  },
});

userSchema.pre('save', function hashPassword (next) {

  if ( !this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.method('comparePassword', function (password) {
  return bcrypt.compare(password, this.password, 10);
});

userSchema.set('toObject', { getters: true });
userSchema.set('toJSON', { getters: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
