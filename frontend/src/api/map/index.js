import instance from '../axios';
import { GET_POSTAMATS } from '../path';

const mockFilters = {
  places: {
    auto: false,
    kiosk: 0,
    sports: 0,
    library: 0,
    culture_house: 0,
    multifunctional: 0,
    underground: 0,
    house: 0,
  },
  districts: ['string'],
  areas: ['string'],
  model_keyword: 'k-means',
  sector: {
    active: false,
    coordinates: 'string',
    radius: 0,
  },
  postamat_count: 0,
  coverage: 0
};

export const getPostamats = (filters = mockFilters) => {
  return instance.post(GET_POSTAMATS, filters);
};
// "places": {
//   "auto": false,
//       "kiosk": 0,
//       "sports": 0,
//       "library": 0,
//       "culture_house": 0,
//       "multifunctional": 0,
//       "underground": 0,
//       "house": 0
// },
// "districts": [
//   "string"
// ],
//     "areas": [
//   "string"
// ],
//     "model_keyword": "k-means",
//     "sector": {
//   "active": false,
//       "coordinates": "string",
//       "radius": 0
// },
// "postamat_count": 0,
//     "coverage": 0
// }'
