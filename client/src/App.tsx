import { Route, Routes } from 'react-router-dom';

// Pages
import Summarizer from './pages/user/Summarizer';

import Auth from './pages/guest/Auth';
import VerifyEmail from './pages/guest/VerifyEmail';
import ForgotPassword from './pages/guest/ForgotPassword';
import ResetPassword from './pages/guest/ResetPassword';

// Components
import { UserLayout } from './components';

// Hooks
import { useAuth } from './hooks';


const App = () => {
  const acessToken = useAuth();

  return (
    <div className="App">
      {acessToken ? (
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Summarizer />} />
            <Route path="/summarizer" element={<Summarizer />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
