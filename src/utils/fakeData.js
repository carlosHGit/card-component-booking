const faker = require('faker')
faker.setLocale('es');

function randomInfo(numberPlaces) {
  const places = [];
  let selectType = () => {
    const ListPlaces = ["Casa del árbol", "Alojamiento aislado", "Casa subterránea", "Contenedor", "Casa domo", "Casa rodante", "Mansion", "Casa alpina", "Granja", "Casa flotante", "Alojamiento"]
    return random = ListPlaces[Math.floor(Math.random() * ListPlaces.length)];
  }
  for (let i= 0; i < numberPlaces; i++) {
    places.push({
      state: faker.address.state(),
      city: faker.address.city(),
      typePlace: selectType(),
      price: faker.helpers.regexpStyleStringParse('$[25-1000],[0-99]'),
      stars: faker.helpers.regexpStyleStringParse('[0-4],[0-99]'),
      resenas: faker.datatype.number({max: 100}),
      photo: faker.image.city(),
      like: faker.datatype.boolean(),
      });
  }
  return places
}

//test

console.log(randomInfo(2))