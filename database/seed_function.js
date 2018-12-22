const faker = require('faker');
const dbConnection = require('./index.js');

// S3 Asset's //
const restaurantPhotos = [
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/124871914.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/123172901.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1237o814.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/124141241.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/124871914.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/125151251.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1251758129.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/125215216.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1255125125.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1283121512.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/12oy3i1yo31.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/152151512.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/152152151.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/152515211.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/152521512.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1o2uy5i1o.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1y12io5y12o5.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2131o1242151.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2141421.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/21421.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2142141.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/214o19219.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2315214124.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2315214124.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2379024.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/25152151.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/278292.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/3215525215.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/463634634.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/512o51.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/532521421.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/53252351.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/535235235.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/61251512.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/63623636.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/6463643.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/7375o2352.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/7473473.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/7895271521.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/78961241241.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/790127041241.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/79057201521.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/792015215.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/79501751.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/825251.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/86219494.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/8753o532.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/912412o412p.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/930760262.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/fish1872391231.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/steak1293871.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/124871914.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/123172901.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1237o814.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/124141241.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/124871914.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/125151251.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1251758129.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/125215216.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1255125125.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1283121512.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/12oy3i1yo31.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/152151512.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/152152151.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/152515211.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/152521512.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1o2uy5i1o.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/1y12io5y12o5.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2131o1242151.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2141421.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/21421.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2142141.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/214o19219.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2315214124.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2315214124.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/2379024.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/25152151.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/278292.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/3215525215.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/463634634.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/512o51.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/532521421.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/53252351.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/535235235.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/61251512.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/63623636.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/6463643.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/7375o2352.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/7473473.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/7895271521.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/78961241241.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/790127041241.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/79057201521.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/792015215.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/79501751.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/825251.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/86219494.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/8753o532.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/912412o412p.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/930760262.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/fish1872391231.jpg',
  'https://s3-us-west-1.amazonaws.com/reserve-me-assets/steak1293871.jpg]',
];

const restaurants = [];

// Generates an array of user photos and meta data //
const generateUserPhotos = () => {
  let userPhotos = [];

  for (let i = 0; i < 50; i += 1) {
    let userPhoto = {
      photo_description: faker.lorem.sentence(),
      date: faker.date.recent(),
      username: faker.name.findName(),
      photoURL: restaurantPhotos[Math.floor(Math.random() * 100)],
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
