const { create } = require('nodejs-logs')

const log = create({
  recordLevel: [0, 1, 2, 3, 4, 5], 
  // 保留一小时的日志
  reserveTime: 60 * 60 * 1
})

module.exports = log