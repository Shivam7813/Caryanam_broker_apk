import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const api = axios.create({
  baseURL: 'http://192.168.1.13:8080',
  timeout: 15000,
  headers: {
    'Content-Type':
      'application/json',
    Accept:
      'application/json',
  },
});


api.interceptors.request.use(
  async config => {
    try {
      const token =
        await AsyncStorage.getItem(
          'userToken'
        );

      if (token) {
        config.headers.Authorization =
          `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      return config;
    }
  },
  error =>
    Promise.reject(error)
);



api.interceptors.response.use(
  response => response,

  async error => {
    if (
      error?.response
        ?.status === 401
    ) {
      await AsyncStorage.multiRemove(
        [
          'userToken',
          'userRole',
          'userData',
        ]
      );
    }

    return Promise.reject(
      error
    );
  }
);

export default api;