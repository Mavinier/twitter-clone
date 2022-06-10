import { useAtomValue } from "jotai";
import { Timeline } from "./pages/timeline/timeline";
import { AreUserLoggedAtom } from "./atoms/login-atom";
import { Login } from "./pages/login/login";
import { Siginup } from "./pages/signup/signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route path="/signup" />
      <Route path="/timeline" />
    </Routes>
  </BrowserRouter>;
  // const areUserLogged = useAtomValue(AreUserLoggedAtom);

  // if (areUserLogged) {
  //   return <Timeline />;
  // }

  // return window.location.pathname === "/signup" ? <Siginup /> : <Login />;
};
