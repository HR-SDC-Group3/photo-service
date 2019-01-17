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
    }
    res.send(response);
  });
});

// UPDATE

app.put('/api/restaurants/:id/photos', (req, res) => {
  const id = req.params.id;
  const photo = req.body;
  db.updateRestaurant(id, photo, (err, response) => {
    if (err) {
      throw err;
    }
    res.send(response);
  });
});

// DELETE

app.delete('/api/restaurants/:id/photos', (req, res) => {
  const id = req.params.id;
  db.deleteRestaurant(id, (err, response) => {
    if (err) {
      throw err;
    }
    res.send(response);
  });
});


const port = 3003;

app.listen(port, () => {
  console.log(`Currently listening in on port ${port}, FEC project`);
});
