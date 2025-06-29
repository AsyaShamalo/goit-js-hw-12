import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51082200-d89cb29d811094b68c71827c6'; 

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
