import { createServer } from "miragejs";
import { routeMockLogin } from "./login.routes";

let isMock = false;

export const makeServer = ({ environment = "development" } = {}) => {
  isMock = true;

  return createServer({
    environment,
    routes() {
      this.urlPrefix = "http://localhost:6010";
      routeMockLogin(this);
    },
  });
};

export const isMocked = () => {
  return isMock;
};
