const axios = require('axios');

const testFunctions = {
  axiosGet: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.data)
    .catch(err => 'Error!'),
  axiosGetError: () => axios.get('https://jsonplaceholder.typicode.com/usr/')
    .then(response => response.data)
    .catch(err => 'Error!'),
};

const sampleData = [
  {
    _id: 0,
    name: 'The Saratoga',
    userPhotos: [
      {
        photo_description: 'This is my example',
        date: 'December 31 1999',
        username: 'testUserName',
        photoURL: 'https://www.google.com/photoURL',
        photoThumbnail: 'https://www.google.com/thumbnail',
      },
    ],
  },
];

module.exports = {
  testFunctions,
  sampleData,
};
