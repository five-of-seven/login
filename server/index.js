const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/dbUtils.js');
const {
  LOGIN_DB_NAME,
  LOGIN_DB_USER,
  LOGIN_DB_PASSWORD,
  LOGIN_DB_HOST,
  LOGIN_DB_HOST_PORT,
} = require('./env.js');
const { logger } = require('./logger.js');

const PORT = process.env.PORT || 50000;
const app = express();
const jsonParser = bodyParser.json();

app.use(cors());

app.get('/test', jsonParser, (req, res) => {
  const testString = `If you see this, test is successful. ${LOGIN_DB_HOST}  ${LOGIN_DB_HOST_PORT}  ${LOGIN_DB_NAME}  ${LOGIN_DB_USER}  ${LOGIN_DB_PASSWORD}.  Changes 8:36pm Sept 29`;
  logger.info({ testString });
  console.log(`testString is ${testString}`);
  res.send(testString);
});

app.post('/createlogin', jsonParser, (req, res) => {
  db.createUser(req.body.password)
    .then(userId => res.send(userId.toString()), error => res.send(error));
});

app.listen(PORT);
