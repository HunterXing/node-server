const handleRouter = require('./src/router');
const { SuccessRequest, FailRequest } = require('./src/R/Request')
const requestHandler = async (request, response) => {
	// 设置返回格式为JSON
	response.setHeader('Content-type', 'application/json');
  let resData = null
  try {
    const data = await handleRouter(request, response);
    resData = new SuccessRequest(data)

  } catch (error) {
    resData = new FailRequest(null, error.message, error.code) 
  }
 
	// 返回数据
	if (resData) {
    response.end(JSON.stringify(resData)); 
    return
  }
  // 未匹配到路由
  response.end(new FailRequest(null, '404 NOT FOUND', 404) );  

}

module.exports = requestHandler;