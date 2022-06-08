import { useAtomValue } from "jotai";
import { Timeline } from "./pages/timeline/timeline";
import { AreUserLoggedAtom } from "./atoms/login-atom";
import { Login } from "./pages/login/login";
import { Siginup } from "./pages/siginup/siginup";

export const App = () => {
  const areUserLogged = useAtomValue(AreUserLoggedAtom);

  if (areUserLogged) {
    return <Timeline />;
  }

  return window.location.pathname === "/siginup" ? <Siginup /> : <Login />;
};
