import { Route, Routes } from 'react-router-dom';

// Components
import { UserLayout } from './components';


const App = () => {
  const user = {};

  return (
    <div className="App">
      {user ? (
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<div>main page</div>} />
          </Route>
        </Routes>
      ) : (
        <p>not available for not users</p>
      )}
    </div>
  );
}

export default App;
