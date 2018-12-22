// Mongo connection //
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurant');
const db = mongoose.connection;


// Put your restaurant schema here //
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

const saveRestaurant = (obj) => {
  const restaurant = new Restaurant(obj);
  restaurant.save((err) => {
    if (err) {
      console.log('Error saving to Database');
    } else {
      console.log('Successfully saved to database');
    }
  });
};

const find = () => {
  return new Promise((resolve) => {
    resolve(Restaurant.find({}));
  });
};

module.exports = {
  find,
  saveRestaurant,
};
