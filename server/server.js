const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('client/dist/'));

app.get('/photos/restaurants/', (req, res) => {
  db.find((err, response) => {
    if (err) {
      console.log(error, 'error getting response from database');
    } else {
      console.log(response);
      res.status(200);
      res.send(response);
    }
  });
});

const port = 3003;
app.listen(port, () => {
  console.log(`Currently listening in on port ${port}, FEC project`);
});
