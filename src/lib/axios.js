import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3001'
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