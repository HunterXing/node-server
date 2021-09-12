/*
 * @description: 创建http服务
 * @Date: 2024-03-30 21:57:27
 * @LastEditTime: 2024-03-30 22:26:23
 */

const http = require('http');
const requestHandler = require('../app');
const PORT = 8080;

const server = http.createServer(requestHandler);

server.listen(PORT);

