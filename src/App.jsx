import './App.css';

import Layoutpage from './pages/Layoutpage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Productpage from './pages/Productpage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route path='/' element={<Layoutpage />}>
            <Route index element={<Homepage />} />
            <Route path='about' element={<Aboutpage />} />
            <Route path='product' element={<Productpage />} />
          </Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
