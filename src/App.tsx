import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/home.tsx';
import About from './pages/About/about.tsx';
import Contact from './pages/Contact/contact.tsx';
import Services from './pages/Services/services.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/services'
          element={<Services />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;
