const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
const jsonParser = bodyParser.json();

app.get('/createlogin', jsonParser, (req, res) => {
  res.send('Testing login microservice');
});

app.post('/createlogin', jsonParser, (req, res) => {
  console.log('Request in login MS is...', req.body);
  res.send('1234');
});

app.listen(PORT);