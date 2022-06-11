import { Timeline } from "./pages/timeline/timeline";
import { Login } from "./pages/login/login";
import { Siginup } from "./pages/signup/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Siginup />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
};
