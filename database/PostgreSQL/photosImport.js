const { Client } = require('pg');
const path = require('path');

const client = new Client({
  host: 'localhost',
  database: 'sdc',
});

const createPhotosTable = `
  CREATE TABLE photos (
    id INT NOT NULL PRIMARY KEY,
    restaurant_id INT NOT NULL,
    restaurant_name VARCHAR NOT NULL,
    photo_description VARCHAR NOT NULL,
    date VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    photoURL VARCHAR NOT NULL
  );
`;

const importPhotosData = () => {
  const fileName = `${path.join(__dirname, '../data.csv')}`;
  const copyString = `COPY photos(id,restaurant_id,restaurant_name,photo_description,date,username,photoURL) FROM '${fileName}' DELIMITER ',' CSV HEADER;`;
  client.query(copyString, (err) => {
    if (err) console.log(err);
    console.log('-------- succesfully imported data');
    client.end();
  });
};

client.connect()
  .then(() => console.log('-- connected to database sdc'))
  .then(() => client.query('DROP TABLE IF EXISTS photos'))
  .then(() => client.query(createPhotosTable))
  .then(() => console.log('---- created photos table'))
  .then(() => console.log('------ beginning to import photos data'))
  .then(() => importPhotosData())
  .catch(err => console.log(err));
// .then(() => client.query(`CREATE INDEX ${columnToIndex}_index ON ${currTable} (${columnToIndex})`))
