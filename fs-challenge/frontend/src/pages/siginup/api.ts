import axios from "axios";
import { SiginupTypes } from "./types";

export const siginup = async (values: SiginupTypes) => {
  return await axios.post("http://localhost:6010/siginup", {
    name: values.name,
    userName: values.userName,
    email: values.email,
    password: values.password,
  });
};
