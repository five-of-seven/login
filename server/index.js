const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/dbUtils.js');
const { logger } = require('./logger.js');
const fetch = require('node-fetch');
const bufferify = require('json-bufferify');
const request = require('request');
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
      //  make the call to the gateway admin api - POST /users IP is 18.222.112.139
      // let jsonStringBody = '{ username: "a12347" }';
      // const apiGatewayCreateuserOptions = {
      //   method: 'POST',
      //   body: jsonStringBody,
      //   // headers: { 'Content-Type': 'application/json' },
      // };

      let jsonStringBody = { username: userId.toString() };
      let options = {
        url: `${API_GATEWAY_URL}/users`,
        json: true,
        method: 'POST',
        'User-Agent': 'request',
        body: jsonStringBody,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true
      };

  request(options, function(err, response, body){
  if(err){
    console.log('error in request module', err);
  }else{
    console.log('Response body ....', body);
    console.log('Username is  ....', userId.toString());
  }
})

      // fetch(`${API_GATEWAY_URL}/users`, apiGatewayCreateuserOptions)
      // fetch('http://localhost:9876/users', apiGatewayCreateuserOptions)
      //   .then((resFromAPIGateway) => {
      //     console.log('resFromAPIGateway - ', resFromAPIGateway.body);
      //     return resFromAPIGateway.arrayBuffer();
      //   }, error => {console.log('error reponse from api gateway...', error)})
      //   .then((arraybuffer) => {
      //     console.log('arrayBuffer - ', arraybuffer);
      //     let buffer = Buffer.from(arraybuffer);
      //     console.log('buffer is - ', buffer.toString());
      //     const template = {
      //       username: 'string',
      //       id: 'string', // Unique identifier, 1-1 relation to username
      //       isActive: 'boolean',
      //       redirectUri: 'string',
      //       createdAt: 'string',
      //       updatedAt: 'string',
      //     };
      //     console.log(`RAW ARRAY-BUFFER respnse from API gateway on new user creation...${arraybuffer}`);
      //     // logger.info({ 'RAW respnse from API gateway on new user creation': JSON.stringify(resFromAPIGateway) });
      //     return bufferify.decode(0, template, arraybuffer);
      //   })
      //   .then((resJson) => {
      //     console.log(`respnse from API gateway on new user creation...${JSON.stringify(resJson)}`);
      //     logger.info({ 'respnse from API gateway on new user creation': JSON.stringify(resJson) });
      //     res.json(resJson);
      //   });
    },
    error => res.send(error));
});

app.post('/login:userid', jsonParser, (req, res) => {
  console.log('Request is..', req);
  logger.info({ 'requested user': req.body });
  res.send(req.body);
});

app.listen(PORT);
