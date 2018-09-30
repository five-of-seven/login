const Sequelize = require('sequelize');

const LOGIN_DB_NAME = process.env.LOGIN_DB_NAME || 'logindb';
const LOGIN_DB_USER = process.env.LOGIN_DB_USER || 'root';
const LOGIN_DB_PASSWORD = process.env.LOGIN_DB_PASSWORD || null;
const LOGIN_DB_HOST = process.env.LOGIN_DB_HOST || 'localhost';
const LOGIN_DB_HOST_PORT = process.env.LOGIN_DB_HOST_PORT || 3306;

module.exports.LOGIN_DB_NAME = LOGIN_DB_NAME;
module.exports.LOGIN_DB_USER = LOGIN_DB_USER;
module.exports.LOGIN_DB_PASSWORD = LOGIN_DB_PASSWORD;
module.exports.LOGIN_DB_HOST = LOGIN_DB_HOST;
module.exports.LOGIN_DB_HOST_PORT = LOGIN_DB_HOST_PORT;

console.log('login db host is...', LOGIN_DB_HOST);
const dbConnection = new Sequelize({
  host: LOGIN_DB_HOST,
  port: LOGIN_DB_HOST_PORT,
  database: LOGIN_DB_NAME,
  username: LOGIN_DB_USER,
  password: LOGIN_DB_PASSWORD,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    underscored: false,
    freezeTableName: true,
    charset: 'utf8',
    timestamps: true,
  },
});

const UserIdPassword = dbConnection.define('userIdPassword', {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports.dbConnection = dbConnection;
module.exports.UserIdPassword = UserIdPassword;
