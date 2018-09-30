const LOGGLY_TOKEN = process.env.LOGGLY_TOKEN || undefined;
const LOGGLY_SUB_DOMAIN = process.env.LOGGLY_SUB_DOMAIN || 'shankarkd';
const LOGIN_DB_NAME = process.env.LOGIN_DB_NAME || 'logindb';
const LOGIN_DB_USER = process.env.LOGIN_DB_USER || 'root';
const LOGIN_DB_PASSWORD = process.env.LOGIN_DB_PASSWORD || null;
const LOGIN_DB_HOST = process.env.LOGIN_DB_HOST || 'localhost';
const LOGIN_DB_HOST_PORT = process.env.LOGIN_DB_HOST_PORT || 3306;

module.exports.LOGGLY_TOKEN = LOGGLY_TOKEN;
module.exports.LOGGLY_SUB_DOMAIN = LOGGLY_SUB_DOMAIN;
module.exports.LOGIN_DB_NAME = LOGIN_DB_NAME;
module.exports.LOGIN_DB_USER = LOGIN_DB_USER;
module.exports.LOGIN_DB_PASSWORD = LOGIN_DB_PASSWORD;
module.exports.LOGIN_DB_HOST = LOGIN_DB_HOST;
module.exports.LOGIN_DB_HOST_PORT = LOGIN_DB_HOST_PORT;