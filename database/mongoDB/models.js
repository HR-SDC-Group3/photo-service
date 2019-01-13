const mongoose = require('mongoose');

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


module.exports = {
  Restaurant,
};
