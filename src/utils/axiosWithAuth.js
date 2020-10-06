import axios from 'axios';

export const axiosWithAuth = authState => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${authState.idToken}`,
    },
    baseURL: process.env.REACT_APP_API_URI,
  });
};
