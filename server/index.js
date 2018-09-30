const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/dbUtils.js');

const PORT = process.env.PORT || 50000;
const app = express();
const jsonParser = bodyParser.json();

app.use(cors());

app.get('/test', jsonParser, (req, res) => {
  res.send('If you see this, test is successful. Changes 8:36pm Sept 29');
});

app.post('/createlogin', jsonParser, (req, res) => {
  db.createUser(req.body.password)
    .then(userId => res.send(userId.toString()), error => res.send(error));
});

app.listen(PORT);
