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

const stream = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });
let i = 0;

const writeDataJSON = () => {
  let proceed = true;
  while (i <= entryCount && proceed) {
    progressLog(i);

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

let loopNum = 1;
let currentIteration = 0;
const maxChunks = 40;
const chunkSize = 100;
const writeDataCSV = (currentLoop) => {
  if (currentLoop > maxChunks) {
    console.timeEnd('Task completed in ');
  }
  let collectedWater = '';
  if (currentLoop <= maxChunks) {
    for (let k = 0; k < chunkSize; k += 1) {
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
        _id: currentIteration,
        name: `restaurant${currentIteration}`,
        userPhotos: photos,
      };
      currentIteration += 1;
      collectedWater += JSON.stringify(entry) + '/n';
    }
    fs.appendFile('./sdc_data.csv', collectedWater, (err) => {
      if (err) { console.error(err); }
      console.log(`Currently at loop ${currentLoop} of ${maxChunks}`);
      loopNum += 1;
      writeDataCSV(loopNum);
    });
  }
};


writeDataJSON();
// writeDataCSV(loopNum);
