import { useAtomValue } from "jotai";
import { Timeline } from "./pages/timeline/timeline";
import { LoggedUser } from "./pages/login/atoms/login-atom";
import { Login } from "./pages/login/login";

export const App = () => {
  const user = useAtomValue(LoggedUser);

  return user ? <Timeline /> : <Login />;
};
