const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/dbUtils.js');
const { logger } = require('./logger.js');

const PORT = process.env.PORT || 50000;
const app = express();
const jsonParser = bodyParser.json();

// app.use(cors());
app.use('/signin', express.static('public'));
app.use('/signin', express.static('dist'));

app.get('/test', jsonParser, (req, res) => {
  const testString = 'If you see this, test is successful.';
  logger.info({ testString });
  console.log(`testString is ${testString}`);
  res.send(testString);
});

app.post('/createlogin', jsonParser, (req, res) => {
  db.createUser(req.body.password)
    .then(userId => res.send(userId.toString()), error => res.send(error));
});

app.post('/login:userid', jsonParser, (req, res) => {
  console.log('Request is..', req);
  logger.info({ 'requested user': req.body });
  res.send(req.body);
});

app.listen(PORT);
