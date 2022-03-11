import { faker } from '@faker-js/faker';

const state = faker.address.state();
const city = faker.address.city()
const price = faker.helpers.regexpStyleStringParse('$[25-1000],[0-99]');
const stars = faker.helpers.regexpStyleStringParse('[0-4],[0-99]');
const resenas = faker.datatype.number({max: 100});
const photo = faker.image.city();
const like = faker.datatype.boolean();
const places = [];


export const createMock = (n) => {
  for (let index = 0; index < n; index++) {
    places.push({state, city, price, stars, resenas, photo, like})
  }
  return places;
};