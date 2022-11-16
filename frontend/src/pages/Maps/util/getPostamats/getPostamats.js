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
      'coverage'
    ]),
    ...pick(get(el, 'placement'), ['coordinates', 'address_string', 'radius']),
  }));
};

// {
//   "title": null,
//     "description": "Многоквартирный жилой дом",
//     "type": "house",
//     "square": 4474.4,
//     "year": 1967,
//     "number_of_floors": 12,
//     "number_of_entrances": null,
//     "number_of_apartments": 109,
//     "coverage": 327,
//     "pvz_cnt": 3,
//     "station_cnt": 0,
//     "station_dist": 5,
//     "dist_to_center": 14.41180452,
//     "passenger_flow": -0.512940384,
//     "indicator": 9.999965157,
//     "placement": {
//   "area": "Северный административный округ",
//       "district": "Дегунино Западное",
//       "radius": 0.4,
//       "coordinates": "55.870814,37.529681",
//       "address_string": "ул. Дегунинская, д. 30, Москва"
// }
