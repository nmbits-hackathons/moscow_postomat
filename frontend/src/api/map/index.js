import instance from '../axios';

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
  placement: [
    {
      district: 'string',
      region: 'string',
    },
  ],
  model_keyword: 'k-means',
  sector: {
    active: false,
    coordinates: 'string',
    radius: 0,
  },
};

export const getPostamats = (filters = mockFilters) => {
  return instance.post('/get_postamats/', filters);
};
