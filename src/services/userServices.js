import axios from 'axios';

export const getUserApi = () => {
  return axios.get(`https://605422ec45e4b30017292c59.mockapi.io/api/user`);
};