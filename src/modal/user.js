const BasicModal = require('./BasicModal');
class UserModal extends BasicModal {
  constructor () {
    super('user')
  }
}
const user = new UserModal()
module.exports = {
  ...user
}

