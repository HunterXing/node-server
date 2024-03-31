const querystring = require('querystring');

const getHttpInfo = (res, req) => {
  const { method, url } = req
  const path = url.split('?')[0]
  const query = url.split('?')[1]
  const id = path.split('/')[3]
  const queryParams = querystring.parse(query)

  return {
    method,
    url,
    path,
    query,
    queryParams,
    id
  }
}
module.exports = getHttpInfo