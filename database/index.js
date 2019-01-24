const mongoose = require('mongoose');

mongoose.connect('mongodb://13.57.19.30:27017/restaurant', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to mongo sdc');
  }
});
// mongoose.connect('mongodb://172.17.0.2:27017/restaurant');
const db = mongoose.connection;

const restaurantSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  userPhotos: [
    {
      photo_description: String,
      date: String,
      username: String,
      photoURL: String,
    },
  ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const saveRestaurant = (req, callback) => {
  Restaurant.create(req, (err, response) => {
    if (err) {
      throw err;
    }
    callback(null, response);
  });
};

const find = (id, callback) => {
  Restaurant.find({ _id: id }, (err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res);
  }).lean();
};

const updateRestaurant = (id, photo, callback) => {
  Restaurant.findOneAndUpdate({ _id: id }, {
    $push: {
      userPhotos: photo,
    },
  }, (err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res);
  });
};

const deleteRestaurant = (id, callback) => {
  Restaurant.deleteOne({ _id: id }, (err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res);
  });
};

module.exports = {
  find,
  saveRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
