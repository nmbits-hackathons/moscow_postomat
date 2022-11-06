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
};
