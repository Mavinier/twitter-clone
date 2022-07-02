import axios from 'axios';

import { apiHost } from '../../config';
import { SignupTypes } from './types';

export const signup = (values: SignupTypes) => {
  return axios.post(`${apiHost}/signup`, {
    name: values.name,
    username: values.username,
    email: values.email,
    password: values.password,
  });
};
