const env = process.env.NODE_ENV;
const config = env === 'development' ? require('./config.dev') : require('./config.prod');
console.log('当前环境:', env);
module.exports = config;

