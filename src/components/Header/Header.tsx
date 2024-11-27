import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../../App.css';
import './Header.css';

const Header = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact me for any voiceover services you need: Commercial, Animation, Narration, Medical
          Narration, eLearning, Explainer, and more!
        </title>
        <meta
          name='description'
          content='Contact voice actor Ian Kleinfeld for any voiceover services you need: Commercial, Animation, Narration, Medical Narration, eLearning, Explainer, and more!'
        />
        <meta
          property='og:title'
          content='Contact me for any voiceover services you need: Commercial, Animation, Narration, Medical Narration, eLearning, Explainer, and more!'
        />
        <meta
          property='og:description'
          content='Contact me for any voiceover services you need: Commercial, Animation, Narration, Medical Narration, eLearning, Explainer, and more!'
        />
        <meta
          property='og:image'
          content='https://voiceoverbyian.com/durham-hero.webp'
        />
        <meta
          property='og:url'
          content='https://voiceoverbyian.com'
        />
        <meta
          property='og:type'
          content='website'
        />
      </Helmet>
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
        </ul>
      </nav>
    </>
  );
};

export default Header;
