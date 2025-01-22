import { Link } from 'react-router-dom';

import '../../App.css';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='top-header'>
        <section>
          <div className='top-header-front'>
            <Link
              to='/'
              className='top-header-vobi-head'
              title='To home page'
            >
              <img
                src='./vobi-head.png'
                alt='Voiceover by Ian - Animation, Commercial, Narration, Medical Narration, eLearning, Explainer, and more!'
              />
              <span className='ian-title'>Voiceover by Ian</span>
            </Link>

            <Link
              to='/contact'
              className='top-text'
              title='To contact page'
            >
              <div className='ian-name'>Ian Kleinfeld</div>
              <div className='ian-tag'>Voice Actor Services for You</div>
            </Link>
          </div>
          <figure className='bg-soundwave'>
            <img
              src='./soundboard-waveform.jpg'
              alt='Waveform Header for Voice Over by Ian dot com'
            />
          </figure>
        </section>
      </div>
      <nav className='main-menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/testimonials'>Testimonials</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
