/*
 * @description: 创建http服务
 * @Date: 2024-03-30 21:57:27
 * @LastEditTime: 2024-04-03 14:29:23
 */

const http = require('http');
const requestHandler = require('../app');
const log = require('../src/utils/log');
const PORT = 8080;

const server = http.createServer(requestHandler);

server.listen(PORT);

log.info(`服务已启动，端口: ${PORT}`);
