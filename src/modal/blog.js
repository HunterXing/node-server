const BasicModal = require('./BasicModal');
class BlogModal extends BasicModal {
  constructor () {
    super('blog')
  }
}
const blog = new BlogModal()
module.exports = {
 ...blog
}

