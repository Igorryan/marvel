import axios from 'axios';

const config = {
  prod: `https://gateway.marvel.com:443/v1/public/`,
};

const api = axios.create({
  baseURL: config.prod,
});

export default api;
