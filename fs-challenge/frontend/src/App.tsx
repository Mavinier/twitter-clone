import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/login';
import { SignupPage } from './pages/signup';
import { TimelinePage } from './pages/timeline';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
    </BrowserRouter>
  );
};
