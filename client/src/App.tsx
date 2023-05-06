import { Route, Routes } from 'react-router-dom';

// Pages
import Summarizer from './pages/user/Summarizer';

import Auth from './pages/guest/Auth';
import VerifyEmail from './pages/guest/VerifyEmail';

// Components
import { UserLayout } from './components';


const App = () => {
  const user = null;

  return (
    <div className="App">
      {user ? (
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
        </Routes>
      )}
    </div>
  );
}

export default App;
