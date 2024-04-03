const env = process.env.NODE_ENV;
const config = require(`./config.${env}`)
module.exports = config;

