const mysql = require('mysql');
const { mysqlConfig } = require('../conf/config');
const connection = mysql.createConnection(mysqlConfig)

// 开始连接
connection.connect();

const exec = (sql) => {
  if (mysqlConfig.debugger) {
    console.info('sql:', sql)
  }
 return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('mysql error:', err)
        reject(err)
        return
      }
      resolve(result)
    })
 })
}
  
module.exports = {
  exec,
  connection
}
