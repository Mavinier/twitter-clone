import axios from 'axios';
import { apiHost } from '../../config';
import { CredentialTypes } from './types';

export const login = async (values: CredentialTypes) => {
  const res = await axios.get(`${apiHost}/login`, {
    auth: {
      username: values.email,
      password: values.password,
    },
  });
  return res;
};
