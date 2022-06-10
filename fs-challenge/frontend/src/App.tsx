import { useAtomValue } from "jotai";
import { Timeline } from "./pages/timeline/timeline";
import { AreUserLoggedAtom } from "./atoms/login-atom";
import { Login } from "./pages/login/login";
import { Siginup } from "./pages/signup/signup";

import { BrowserRouter, Routes } from "react-router-dom";

export const App = () => {
  const areUserLogged = useAtomValue(AreUserLoggedAtom);

  if (areUserLogged) {
    return <Timeline />;
  }

  return window.location.pathname === "/signup" ? <Siginup /> : <Login />;
};
