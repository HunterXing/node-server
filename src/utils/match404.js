const match404 = (path) => {
  return new Promise((_, reject) => {
    reject({
      message: `未匹配到${path}路由`,
      code: 404
    })
  })
}

module.exports = match404