import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./global.css";
import { makeServer } from "./mock/mock-server";

// makeServer();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
