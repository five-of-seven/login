const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const fetch = require('node-fetch');
// const bufferify = require('json-bufferify');
const request = require('request');
// const requestPromise = require('request-promise-native');
const { getUserId, createJWT } = require('./utils.js');
const db = require('../database/dbUtils.js');
const { logger } = require('./logger.js');

const PORT = process.env.PORT || 50000;
const API_ADMIN_GATEWAY_URL = process.env.API_ADMIN_GATEWAY_URL || 'http://localhost:9876';
const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'http://localhost:50000';
const HOME_PAGE_URL = process.env.HOME_PAGE_URL || 'http://18.217.151.202/homepage';
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
      // const expressGatewayOptions = {
      //   url: `${API_GATEWAY_URL}/users`,
      //   json: true,
      //   method: 'POST',
      //   'User-Agent': 'request',
      //   body: jsonStringBody,
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': true,
      // };
      console.log(jsonStringBody);
      const kongAPIGatewayOptionsCreateConsumer = {
        url: `${API_ADMIN_GATEWAY_URL}/consumers`,
        json: true,
        method: 'POST',
        'User-Agent': 'request',
        body: jsonStringBody,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
      };


      request(kongAPIGatewayOptionsCreateConsumer, (err, response, body) => {
        if (err) {
          console.log('error in create consumer call', err);
        } else {
          console.log('Response body ....', body);
          console.log('Username is  ....', userId.toString());
          res.json(body);
        }
      });
    },
    error => res.send(error));
});

app.get('/signingin', jsonParser, (req, res) => {
  const {
    email,
    password,
  } = req.query;
  let jwtToken;

  console.log(`testing ADMIN URL....${API_ADMIN_GATEWAY_URL}`);
  console.log(`testing URL....${API_GATEWAY_URL}`);
  getUserId(email)
    .then((userId) => {
      console.log('userId is ', userId);
      if (userId === 'false') {
        res.send(JSON.stringify({ userId: null })); // NEEDS TO BE CHANGED LATER
      } else {
        // CHECK FOR PASSWORD HERE

        const kongAPIGatewayOptionsCreateCredential = {
          url: `${API_ADMIN_GATEWAY_URL}/consumers/${userId}/jwt`,
          method: 'POST',
          'User-Agent': 'request',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': true,
        };
        const kongAPIGatewayOptionsDeleteCredential = {
          method: 'DELETE',
          'User-Agent': 'request',
          'Access-Control-Allow-Origin': true,
        };
        // const kongAPIGatewayOptionsSignedInTest = {
        //   method: 'GET',
        //   'User-Agent': 'request',
        //   'Content-Type': 'application/x-www-form-urlencoded',
        //   'Access-Control-Allow-Origin': true,
        // };
        let kongAPIgatewaySendJwt;

        // DELETE ANY EXISTING CREDENTIAL
        // curl -X GET http://kong:8001/consumers/{consumer}/jwt
        fetch(`${API_ADMIN_GATEWAY_URL}/consumers/${userId}/jwt`)
          .then(response => response.json())
          .then((credentialList) => {
            if (credentialList.total > 1) {
              console.log('too many credentials');
              res.send({ error: `error: too many credentials for the user, ${userId}` });
              return 1;
            } else if (credentialList.total === 1) {
              const deletUrl = `${API_ADMIN_GATEWAY_URL}/consumers/${userId}/jwt/${credentialList.data[0].id}`;
              console.log(`deleting credential...${deletUrl}`);
              return fetch(deletUrl, kongAPIGatewayOptionsDeleteCredential);
            }
            return 2;
          })
          .then(() => fetch(`${API_ADMIN_GATEWAY_URL}/consumers/${userId}/jwt`, kongAPIGatewayOptionsCreateCredential))
          .then(response => response.json())
          .then((credential) => {
            console.log('Created Credential is...', credential);
            const {
              id: credentialId,
              secret,
              key,
            } = credential;
            // CRETATE THE JWT WITH THE CREDENTIALS FROM KONG
            const token = createJWT(userId, credentialId, secret, key);
            console.log('created token is...', token);

            // SEND THE JWT BACK
            // res.json({ token });
            jwtToken = token;
            return token;
          })
          .then((token) => {
            kongAPIgatewaySendJwt = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            return fetch(`${API_GATEWAY_URL}/signedintest`, kongAPIgatewaySendJwt);
          })// ?jwt=${token}`))
          .then(response => response.text())
          .then((text) => {
            console.log(text);
            // res.send(text);
            console.log('jwtToken is...', jwtToken);
            res.header('Authorization', `Bearer ${jwtToken}`);
            console.log('res after header set is...', res);
            res.status(302);
            res.redirect(`${API_GATEWAY_URL}/homepage?userId=${userId}&jwt=${jwtToken}`);
            // return fetch(`${API_GATEWAY_URL}/home`, kongAPIgatewaySendJwt);
          });
      }
    });
});


app.post('/logout', jsonParser, (req, res) => {
  const {
    userId,
  } = req.body.data;

  const {
    jwt
  } = req.query;

  console.log('requested logout for user...', userId);
  console.log('jwt for the user logging out is...', jwt);
  console.log(`testing ADMIN URL....${API_ADMIN_GATEWAY_URL}`);
  console.log(`testing URL....${API_GATEWAY_URL}`);

  const kongAPIGatewayOptionsDeleteCredential = {
    method: 'DELETE',
    'User-Agent': 'request',
    'Access-Control-Allow-Origin': true,
  };

  // DELETE ANY EXISTING CREDENTIAL
  // curl -X GET http://kong:8001/consumers/{consumer}/jwt
  fetch(`${API_ADMIN_GATEWAY_URL}/consumers/${userId}/jwt`)
    .then(response => response.json())
    .then((credentialList) => {
      if (credentialList.total > 1) {
        console.log('too many credentials');
        res.send({ error: `error: too many credentials for the user, ${userId}` });
        return 1;
      } else if (credentialList.total === 1) {
        const deletUrl = `${API_ADMIN_GATEWAY_URL}/consumers/${userId}/jwt/${credentialList.data[0].id}`;
        console.log(`deleting credential...${deletUrl}`);
        return fetch(deletUrl, kongAPIGatewayOptionsDeleteCredential);
      }
      return 2;
    })
    .then(() => {
      console.log('redirecting now....');
      res.status(302);
      res.redirect(`${API_GATEWAY_URL}/`);
    });
});

app.get('/signedintest', (req, res) => {
  // logger.info({ 'received token at /signedintest is': req.query.token });
  console.log('received token at /signedintest is...', req.header('Authorization'));
  res.send(`you are now signed into /signedintest with token ${req.query.token}`);
});

app.get('/signedinhome', jsonParser, (req, res) => {
  console.log('Request is..', req);
  logger.info({ 'requested user': req.body });
  res.send(req.body);
});


app.listen(PORT);
