const fs = require('graceful-fs');
const faker = require('faker');
const path = require('path');

console.time('Task completed in ');

const entryCount = 9999999;

const progressLog = (index) => {
  if (index === 1) {
    console.log('STARTING WRITING!');
  }
  if (index === Math.floor(1 * entryCount / 10)) {
    console.log('-- 10% complete');
  }
  if (index === Math.floor(2 * entryCount / 10)) {
    console.log('---- 20% complete');
  }
  if (index === Math.floor(3 * entryCount / 10)) {
    console.log('------ 30% complete');
  }
  if (index === Math.floor(4 * entryCount / 10)) {
    console.log('-------- 40% complete');
  }
  if (index === Math.floor(5 * entryCount / 10)) {
    console.log('---------- 50% complete');
  }
  if (index === Math.floor(6 * entryCount / 10)) {
    console.log('------------ 60% complete');
  }
  if (index === Math.floor(7 * entryCount / 10)) {
    console.log('-------------- 70% complete');
  }
  if (index === Math.floor(8 * entryCount / 10)) {
    console.log('---------------- 80% complete');
  }
  if (index === Math.floor(9 * entryCount / 10)) {
    console.log('------------------ 90% complete');
  }
  if (index === entryCount) {
    console.log('-------------------- SUCCESSFULLY WRITTEN');
    console.timeEnd('Task completed in ');
  }
};

const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
const stream = fs.createWriteStream(path.join(__dirname, '/data1.csv'), { flags: 'w' });
let i = 0;

const writeDataJSON = () => {
  let proceed = true;
  while (i <= entryCount && proceed) {
    progressLog(i);

    const photos = [];
    for (let j = 0; j < 7; j += 1) {
      photos.push({
        photo_description: faker.lorem.words(),
        date: faker.date.recent(),
        username: faker.name.findName(),
        photoURL: `https://s3.amazonaws.com/large-photos/img${getRandomInt(1, 500)}.jpg`,
      });
    }
    const entry = {
      _id: i,
      name: `restaurant${i}`,
      userPhotos: photos,
    };
    proceed = stream.write(JSON.stringify(entry) + '\n');
    i += 1;
  }

  if (!proceed) {
    stream.once('drain', () => {
      writeDataJSON();
    });
  }
};

let restaurantId = 0;

const writeDataCSV = () => {
  let proceed = true;

  while (i <= entryCount && proceed) {
    for (let j = 0; j < 10; j += 1) {
      if (i === 0) {
        proceed = stream.write('id,restaurant_id,restaurant_name,photo_description,date,username,photoURL\n');
      }
      progressLog(i);
      const entry = `${i},`
                    + `${restaurantId},`
                    + `restaurant${restaurantId},`
                    + `${faker.lorem.sentence()},`
                    + `${faker.date.recent().split(' ').slice(0, 4).join(' ')},`
                    + `${faker.name.findName()},`
                    + `https://s3.amazonaws.com/large-photos/img${getRandomInt(1, 500)}.jpg\n`;
      proceed = stream.write(entry);
      i += 1;
    }
    restaurantId += 1;
  }

  if (!proceed) {
    stream.once('drain', () => {
      writeDataCSV();
    });
  }
};


writeDataJSON();
// writeDataCSV();
