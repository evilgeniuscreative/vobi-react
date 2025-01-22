import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import './App.css';
import Home from './pages/Home/home.tsx';
import About from './pages/About/about.tsx';
import Contact from './pages/Contact/contact.tsx';
import Services from './pages/Services/services.tsx';
import Count from './pages/Count/count.tsx';
import Testimonials from './pages/Testimonials/testimonials.tsx';

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
          <Route
            path='/testimonials'
            element={<Testimonials />}
            />
          <Route
            path='/count'
            element={<Count />}
          />
        </Routes>
      </Router>
 
  );
}

export default App;
