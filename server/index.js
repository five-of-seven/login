const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 50000;
const app = express();
const jsonParser = bodyParser.json();

app.use(cors());

app.get('/test', jsonParser, (req, res) => {
  res.send('If you see this, test is successful. Changes to test AWS CD');
});

app.post('/createlogin', jsonParser, (req, res) => {
  console.log('Request in login MS is...', req.body);
  res.send('1234');
});

app.listen(PORT);
