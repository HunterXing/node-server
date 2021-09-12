/*
 * @description: 创建http服务
 * @Date: 2024-03-30 21:57:27
 * @LastEditTime: 2024-03-30 22:26:23
 */

const http = require('http');
const querystring = require('querystring');

const server = http.createServer(async (request, response) => {
	const METHOD = request.method;
	const URL = request.url;
	const PATH = URL.split('?')[0];
	const QUERY = querystring.parse(URL.split('?')[1]);

	// 设置返回格式为JSON
	response.setHeader('Content-type', 'application/json');
	
	// 返回数据
	const resData = {
		method: METHOD,
		url: URL,
		path: PATH,
		query: QUERY
	};

	if (METHOD === 'GET') {
		response.end(JSON.stringify(resData)); 
	}

	if (METHOD === 'POST') {
		let postData = '';
		request.on('data', chunk => {
			postData += chunk.toString();
		});
		request.on('end', () => {
			resData.postData = postData;
			response.end(JSON.stringify(resData)); 
		});
	}
});

server.listen(8080);

