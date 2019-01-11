const fs = require('fs');
const faker = require('faker');
const path = require('path');

const entryCount = 100;

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
  }
};

const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const stream = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });
let i = 0;

const writeData = () => {
  while (i < entryCount) {
    const photos = [];
    for (let j = 0; j < 10; j += 1) {
      photos.push({
        photo_description: faker.lorem.sentence(),
        date: faker.date.recent(),
        username: faker.name.findName(),
        photoURL: `https://s3.amazonaws.com/large-photos/img${getRandomInt(1, 500)}.jpg`,
      });
    }
    const entry = {
      _id: i,
      name: faker.company.companyName(),
      userPhotos: photos,
    };
    if (!stream.write(JSON.stringify(entry) + '\n')) {
      return;
    }
    i += 1;
    progressLog(i);
  }
  stream.end();
  console.timeEnd();
};

wstream.on('drain', () => {
  writeData();
});
console.time();
writeData();
