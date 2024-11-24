import { Link } from 'react-router-dom';
import '../../App.css';

const Header = () => {
  return (
    <>
      <div className='top-header'>
        <section>
          <div className='top-header-front'>
            <figure className='top-header-vobi-head'>
              <img
                src='./vobi-head.png'
                alt='Voiceover by Ian - Animation, Commercial, Narration, Medical Narration, eLearning, Explainer, and more!'
              />
            </figure>

            <aside className='top-text'>
              <div className='ian-name'>Ian Kleinfeld</div>
              <div className='ian-tag'>Voice Actor Services for You</div>
            </aside>
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
        </ul>
      </nav>
    </>
  );
};

export default Header;
