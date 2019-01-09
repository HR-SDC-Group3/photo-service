// Mongo connection // 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurant');
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
      photoThumbnail: String,
    },
  ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const saveRestaurant = (obj) => {
  const restaurant = new Restaurant(obj);
  restaurant.save((err) => {
    if (err) {
      throw err;
    } else {
      console.log('Successfully saved to database');
      db.close();
    }
  });
};

const find = (id, callback) => {
  Restaurant.find({ _id: id }, (err, res) => {
    if (err) {
      throw err;
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  find,
  saveRestaurant,
};
