const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const fetch = require('node-fetch');
// const bufferify = require('json-bufferify');
const request = require('request');
const { getUserId } = require('./utils.js');
const db = require('../database/dbUtils.js');
const { logger } = require('./logger.js');

const PORT = process.env.PORT || 50000;
const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'http://localhost:9876';
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
    .then((userId) => {
      const jsonStringBody = { username: userId.toString() };
      const options = {
        url: `${API_GATEWAY_URL}/users`,
        json: true,
        method: 'POST',
        'User-Agent': 'request',
        body: jsonStringBody,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
      };

      request(options, (err, response, body) => {
        if (err) {
          console.log('error in request module', err);
        } else {
          console.log('Response body ....', body);
          console.log('Username is  ....', userId.toString());
          res.json(body);
        }
      });
    },
    error => res.send(error));
});

app.post('/signingin', jsonParser, (req, res) => {
  console.log('Request is..', req);
  logger.info({ 'requested user': req.body });
  const {
    email,
    password,
  } = req.body;

  getUserId(email)
    .then((userId) => {
      console.log('userId is ', userId);
      if (userId === 'false') {
        res.send(JSON.stringify({ userId: null })); // NEEDS TO BE CHANGED LATER
      } else {
        res.send(JSON.stringify({ userId }));
      }
    });
  // res.status(401);
  // res.end();
});

app.get('/signedin', jsonParser, (req, res) => {
  console.log('Request is..', req);
  logger.info({ 'requested user': req.body });
  res.send('you are now signed in');
});

app.get('/signedinhome', jsonParser, (req, res) => {
  console.log('Request is..', req);
  logger.info({ 'requested user': req.body });
  res.send(req.body);
});


app.listen(PORT);
