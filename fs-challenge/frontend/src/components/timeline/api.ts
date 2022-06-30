import axios from 'axios';

import { apiHost } from '../../config';

export const getTweets = async (token: string) => {
  return axios.get(`${apiHost}/tweets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
