import axios from 'axios';
import { apiHost } from '../../config';

export const getTweets = async (token: string) => {
  return await axios.get(`${apiHost}/tweets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
