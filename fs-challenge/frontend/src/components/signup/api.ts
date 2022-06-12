import axios from "axios";
import { apiHost } from "../../config";
import { SignupTypes } from "./types";

export const signup = async (values: SignupTypes) => {
  return await axios.post(`${apiHost}/signup`, {
    name: values.name,
    userName: values.userName,
    email: values.email,
    password: values.password,
  });
};
