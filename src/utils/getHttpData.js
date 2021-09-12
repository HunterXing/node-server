const getHttpData = async (req) => {
  return await new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      resolve(JSON.parse(body))
    })
  })
}

module.exports = getHttpData