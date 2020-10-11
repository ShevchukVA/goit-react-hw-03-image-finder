import axios from 'axios';

const keyApi = '18661851-33f15e0f8577d5b4d35fae430';
const baseUrl = 'https://pixabay.com/api/';

const fetchImagesFromApi = (searchQuery, page) => {
  const requestParams = `?q=${searchQuery}&page=${page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios
    .get(baseUrl + requestParams)
    .then(response => response.data.hits);
};
export default {
  fetchImagesFromApi,
};
