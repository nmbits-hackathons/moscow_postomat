export const getStateForPostamatsRequest = (state) => {
  return {
    places: {
      auto: state.isAutoCalc,
      kiosk: state.kiosks,
      sports: state.sports,
      library: state.libraries,
      culture_house: state.cultureHouses,
      multifunctional: state.multifunctionalCenter,
      underground: state.underground,
      house: state.houses,
    },
    districts: [],
    areas: [],
    model_keyword: 'math_model',
    sector: {
      active: false,
      coordinates: 'string',
      radius: 0,
    },
    postamat_count: 2,
    coverage: 0
  };
};
// {
//   "places": {
//   "auto": false,
//       "kiosk": 0,
//       "sports": 0,
//       "library": 0,
//       "culture_house": 0,
//       "multifunctional": 0,
//       "underground": 0,
//       "house": 0
// },
//   "districts": [
// ],
//     "areas": [
// ],
//     "model_keyword": "math_model",
//     "sector": {
//   "active": false,
//       "coordinates": "string",
//       "radius": 0
// },
//   "postamat_count": 2,
//     "coverage": 0
// }
