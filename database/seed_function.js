const faker = require('faker');
const dbConnection = require('./index.js');

// S3 Asset's //
const restaurantPhotos = [
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/bonemarrow_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/cake_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/cheesepizza_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/chocolatecake_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/clams_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/fruitsalad_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/gnocci_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/greenpeppers_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/greenpeppers_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/margherita_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/marrow_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/meatassortment_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/meats_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/orangepasta_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/pizzaside_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/ravioli_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/shrimptoast_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/snowpeas_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/spinichpasta_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/steak_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/strawberrycake_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/tartar_large.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/large_photos/uni_large.jpg',
];

const restaurantThumbnails = [
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/bonemarrow_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/cake_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/cheesepizza_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/chocolatecake_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/clams_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/fruitsalad_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/gnocci_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/greenpeppers_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/greenpeppers_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/margherita_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/marrow_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/meatassortment_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/meats_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/orangepasta_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/pizzaside_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/ravioli_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/shrimptoast_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/snowpeas_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/spinichpasta_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/steak_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/strawberrycake_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/tartar_small.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/thumbnails/uni_small.jpg',
]

const restaurants = [];

// Generates an array of user photos and meta data //
const generateUserPhotos = () => {
  const userPhotos = [];

  for (let i = 0; i < 23; i += 1) {
    let userPhoto = {
      photo_description: faker.lorem.sentence(),
      date: faker.date.recent(),
      username: faker.name.findName(),
      photoURL: restaurantPhotos[i],
      photoThumbnails: restaurantThumbnails[i],
    };
    userPhotos.push(userPhoto);
  }
  return userPhotos;
};

// Builds out Restaurant Mongo schema with userPhotos array //
for (let i = 1; i < restaurantPhotos.length; i += 1) {
  restaurants.push({
    _id: i,
    name: faker.name.findName(),
    userPhotos: generateUserPhotos(),
  });
}

// Saves to MongoDB //

restaurants.forEach((restaurant) => {
  dbConnection.saveRestaurant(restaurant);
});
