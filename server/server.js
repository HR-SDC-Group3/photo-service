const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/restaurants/:id', express.static('client/dist/'));

app.get('/api/restaurants/:id/photos', (req, res) => {
  const restaurantId = req.params.id;

  db.find(restaurantId, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.status(200);
      res.send(response);
    }
  });
});

const port = 3003;
app.listen(port, () => {
  console.log(`Currently listening in on port ${port}, FEC project`);
});
