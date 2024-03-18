

import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export default axios.create({
    baseURL: BASE_URL,
});

export const privateAxios = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true
});

//  instance.interceptors.request.use(
//     (config) => {
//       const token = '{TOKEN}'
//       const auth = token ? `Bearer ${token}` : '';
//       config.headers.common['Authorization'] = auth;
//       return config;
//     },
//     (error) => Promise.reject(error),
//   );

