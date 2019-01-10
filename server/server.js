const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/restaurants/:id', express.static('client/dist/'));
app.use(cors());

// READ

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

// CREATE

app.post('/api/restaurants/:id/photos', (req, res) => {
  const restaurant = req.body;
  db.saveRestaurant(restaurant, (err, response) => {
    if (err) {
      throw err;
    } else {
      res.send(response);
    }
  });
});

// UPDATE

app.put('/api/restaurants/:id/photos', (req, res) => {
  const restaurant = req.body;
  db.updateRestaurant(restaurant).then(() => {
    res.end();
  });
});

// DELETE

app.delete('/api/restaurants/:id/photos', (req, res) => {
  const restaurantId = req.params.id;
  db.deleteRestaurant(restaurantId).then(() => {
    res.end();
  });
});


const port = 3003;

app.listen(port, () => {
  console.log(`Currently listening in on port ${port}, FEC project`);
});
