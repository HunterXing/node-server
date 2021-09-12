class BasicRequest {
  constructor(data, message, code) {
    this.data = data;
    this.message = message;
    this.code = code
  }
}

class SuccessRequest extends BasicRequest {
  constructor(data, message, code) {
    super(data, message, code)
    this.code = 200
    this.message = message || 'success'
  }
}

class FailRequest extends BasicRequest {
  constructor(data, message, code) {
    super(data, message, code)
    this.data = null
    this.code = code || 500
    this.message = message || 'fail'
  }
}

module.exports = {
  SuccessRequest,
  FailRequest
}