import config from '@/config';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
