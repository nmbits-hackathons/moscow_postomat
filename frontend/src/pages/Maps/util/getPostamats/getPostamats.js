import pick from 'lodash/pick';
import get from 'lodash/get';
export const getPostamatsForData = (points) => {
  return points.map((el) => ({
    ...pick(el, [
      'id',
      'title',
      'description',
      'indicator',
      'square',
      'year',
      'number_of_apartments',
      'number of entrances',
      'number of floors',
    ]),
    ...pick(get(el, 'placement'), ['coordinates', 'address_string', 'radius']),
  }));
};

// {
//   "id": 1,
//     "title": "test",
//     "description": "str - optional",
//     "type": "theatre",
//     "indicator": 9.3,
//     "placement": {
//   "region": "test",
//       "district": "test",
//       "radius": 0,
//       "coordinates": "55.834472,37.65805",
//       "address_string": "пр-кт. Мира, д. 188 Б, к. 1, Москва"
// },
//   "square": 54804.1,
//     "year": 2014,
//     "number of floors": 58,
//     "number of entrances": 1,
//     "number_of_apartments": 370,
//     "coverage": 21
// },
