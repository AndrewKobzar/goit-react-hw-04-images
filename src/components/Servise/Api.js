import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '16786319-bf43256140adf4f828797693c';

export const getSearchApi = (name, page) => {
  return axios
    .get(`/?per_page=12&`, {
      params: {
        key: API_KEY,
        q: name,
        imageType: 'photo',
        orientation: 'horizontal',
        page,
      },
    })
    .then(r => r.data);
};
