class UserError extends Error{
  constructor (msg, status) {
    super(msg);
    this._status = status;
  }

  get status () {
    return this._status;
  }

}

class BadRequestError extends UserError{
  constructor (msg) {
    super(msg || 'Bad request', 400);
  }
}

module.exports = {
  UserError,
  BadRequestError,
};
