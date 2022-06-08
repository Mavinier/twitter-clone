import { Server, Response } from "miragejs";

export const routeMockLogin = (server: Server) => {
  server.get("/login", () => {
    return new Response(200, {}, {});
  });
};
