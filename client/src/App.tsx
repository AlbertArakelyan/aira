import { Route, Routes } from 'react-router-dom';

// Pages
import Summarizer from './pages/user/Summarizer';

// Components
import { UserLayout } from './components';


const App = () => {
  const user = {};

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
        <p>not available for not users</p>
      )}
    </div>
  );
}

export default App;
