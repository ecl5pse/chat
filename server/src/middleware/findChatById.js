const { NotFoundError } = require('../utils/errors');
const {Chat } = require('./../models');

module.exports = async (req, res, next) => {
  try {
    req.chat = await Chat.findById(req.params.chatId);
    if (req.chat) {
      return next();
    }
    return res.status(404).send('Chat Not Found');
  } catch (e) {
    next(e);
  }

};
