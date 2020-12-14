import axios, { Method } from 'axios';
import { API_URL } from '../constants/api';

const request = (route: string, method?: Method): any => {
  return axios({
    url: `${API_URL}/${route}`,
    method: method || 'get',
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export default request;
