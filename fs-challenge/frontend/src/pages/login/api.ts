import axios from "axios";
import { CredentialTypes } from "./types";

export const login = async (values: CredentialTypes) => {
  const res = await axios.get("http://localhost:6010/login", {
    auth: {
      username: values.email,
      password: values.password,
    },
  });
  return res;
};
