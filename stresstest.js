import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 150,
  rps: 1000,
  duration: '1h',
};

const getRandomInt = (min, max, randomNum) => (Math.floor(randomNum * (max - min + 1)) + min);

export default function () {
  const randomNum = Math.random();
  let min = 0;
  const max = 9999999;
  if (randomNum > 0.2) {
    min = 9998999;
  }
  const id = getRandomInt(min, max, randomNum);
  let res = http.get(`http://localhost:3003/api/restaurants/${id}/photos`);
  check(res, {
    'status was 200': r => r.status === 200,
  });
}
