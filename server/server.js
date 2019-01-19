require('newrelic');

const redisClient = require('redis').createClient;
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

const redis = redisClient(6379, 'localhost');
const app = express();
const port = 3003;
const db = require('../database/index.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/restaurants/:id', express.static('client/dist/'));
app.use(cors());
app.use(morgan('dev'));

redis.on('ready', () => {
  console.log('Connected to redis!');
});
redis.on('error', (err) => { throw err; });

// READ

app.get('/api/restaurants/:id/photos', (req, res) => {
  const _id = req.params.id;

  return redis.get(_id, (err, reply) => {
    if (reply) {
      const replyJSON = JSON.parse(reply);
      return res.status(200).json(replyJSON);
    }
    return db.find(_id, (error, response) => {
      if (error) {
        res.status(404).end();
      } else {
        redis.setex(_id, 3600, JSON.stringify(response));
        res.status(200).json(response);
      }
    });
  });
});

// CREATE

app.post('/api/restaurants/:id/photos', (req, res) => {
  const restaurant = req.body;
  db.saveRestaurant(restaurant, (err, response) => {
    if (err) {
      res.status(404).end();
    }
    res.status(201).send(response);
  });
});

// UPDATE

app.put('/api/restaurants/:id/photos', (req, res) => {
  const id = req.params.id;
  const photo = req.body;
  db.updateRestaurant(id, photo, (err, response) => {
    if (err) {
      res.status(404).end();
    }
    res.status(200).send(response);
  });
});

// DELETE

app.delete('/api/restaurants/:id/photos', (req, res) => {
  const id = req.params.id;
  db.deleteRestaurant(id, (err, response) => {
    if (err) {
      res.status(404).end();
    }
    res.status(410).send(response);
  });
});

app.listen(port, () => {
  console.log(`Currently listening in on port ${port}, FEC project`);
});
