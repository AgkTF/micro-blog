import axios from 'axios';

export const axios_firebase = axios.create({
  baseURL: 'https://micro-blog-b11d9.firebaseio.com',
});
