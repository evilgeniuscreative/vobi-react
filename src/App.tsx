import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import AudioVisualzation from './components/AudioVisualization/AudioVisualzation';

function App() {
  const handleLink = (event: any) => {
    event.preventDefault(); // Prevent default Link behavior
    window.open('/your-route', '_blank'); // Open in new tab
  };

  return (
    <Router>
      <div>
        <div className='top-header'>
          <section>
            <img
              src='./vobi-head.png'
              alt='Voiceover by Ian - Animation, Commercial, Narration, Medical Narration, eLearning, Explainer, and more!'
            />
            <aside>
              <div className='ian-name'>Ian Kleinfeld</div>
              <div className='ian-tag'>Voice Actor Services for You</div>
            </aside>
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
        <main className='flex flex-col items-center sm:items-start'>
          <div className='hero'></div>
        </main>
        <section className='main-section'>
          <article className='main-left'>
            <h2 className='text-4xl font-bold'>
              50% guy next door, 50% evil genius mad scientist. 100% your choice.
            </h2>
            <p className='text-xl pb-3'>
              I&apos;m Ian Kleinfeld, a voice talent with a boatload of enthusiasm, energy and
              creativity. I&apos;m a singer, songwriter, and drummer by hobby, and a voice actor by
              love. I&apos;ve done professional commercial and theater acting since 1995.{' '}
            </p>
            <p className='text-xl pb-3'>
              My favorite place to be, my “happy place,” is in the studio, whether for voice or
              music. I have a professional studio with Source Connect Standard, planned and tuned by
              Frank Verderosa, though I always super enjoy going out to a top-tier studio when I
              have the chance.
            </p>
            <p className='text-xl pb-3'>
              I bring professionalism, creativity, energy, problem-solving skills, and FUN to every
              project I work on.
            </p>
            <p className='text-xl pb-3'>
              {' '}
              I am trained in voice acting through sessions or classes with Anna Garduno, Roger
              Becker, Andy Roth, Deborah Sperling, and other coaches, seminars, and intentsives.
            </p>
            <p className='text-xl pb-3'>
              I&apos;m trained in stage acting at Cabrillo College, University of California Santa
              Cruz, and Jean Shelton Acting Studio.
            </p>
          </article>
          <article className='main-right'>
            <h2 className='text-4xl font-bold'>Demos</h2>
            <p className='text-xl'>
              Please have a listen to my demos to see what I can do for you.
            </p>
            {/*  Demo player */}
            <p className='text-xl pb-3 pt-7 font-semibold'>Commercial Demo</p>
            <AudioVisualzation audioSrc='commercial'></AudioVisualzation>

            <p className='text-xl pb-3 pt-7 font-semibold'>Character / Game / Animation Demo</p>
            <AudioVisualzation audioSrc='character'></AudioVisualzation>
          </article>
        </section>
        <section className='bottom-section text-4xl p-10 text-center'>
          Tell me what you want, and I&apos;ll make it happen!
        </section>
        <footer>
          <p className='footer-text'>
            Broadcast-ready home studio with Source-Connect, Skype, Hangouts, and Phone |{' '}
            <a href='19193576004'>(919) 357-6004</a>
          </p>
          <section className='footer-flex'>
            <div className='flex pt-4 gap-4 footer-icons'>
              <div className='icon'>
                <Link
                  to='https://www.linkedin.com/in/voiceoverian/'
                  onClick={handleLink}
                >
                  <img
                    width={36}
                    height={36}
                    alt='LinkedIn VoiceByIan'
                    src='/icon-linkedin.webp'
                  />
                </Link>
              </div>
              <div className='icon'>
                <Link
                  to='https://www.instagram.com/voicebyian/'
                  onClick={handleLink}
                >
                  <img
                    width={36}
                    height={36}
                    alt='Instagram VoiceByIan'
                    src='/icon-ig.webp'
                  />
                </Link>
              </div>
              <div className='icon'>
                <Link
                  to='https://twitter.com/VoiceByIan'
                  onClick={handleLink}
                >
                  <img
                    width={36}
                    height={36}
                    alt='Twitter VoiceByIan'
                    src='/icon-twitter.webp'
                  />
                </Link>
              </div>
              <div className='icon'>
                <Link
                  to='https://www.facebook.com/voicebyian'
                  onClick={handleLink}
                >
                  <img
                    width={36}
                    height={36}
                    src='/icon-fb.webp'
                    alt='Facebook VoiceByIan'
                  />
                </Link>
              </div>
            </div>
            {/* right side */}
            <div className='source-connect'>
              <Link
                to='https://source-elements.com/find/iankleinfeld'
                onClick={handleLink}
              >
                <img
                  width={203}
                  height={65}
                  src='/sourceconnectlogo.webp'
                  alt='Source Connect Standard in Studio'
                  className='icon'
                />
              </Link>
            </div>
            <div className='podcast-right'>
              <article className='podcast'>
                <div className='podcast-text'>
                  <p className='pod-text'>Voiceover is hard to get into.</p>
                  <p className='pod-text'>
                    Our podcast interviews successful voice actors, asking
                    <em>
                      <strong>Voiceover: How Did You DO It??</strong>,
                    </em>
                    and how you can too. Listen in. It’s free!
                  </p>
                  <p className='pod-text'>
                    <Link
                      to='http://voiceoverpodcast.com'
                      className='vop-link'
                      onClick={handleLink}
                    >
                      http://voiceoverpodcast.com
                    </Link>
                  </p>
                </div>
                <div>
                  <Link
                    to='http://voiceoverpodcast.com'
                    onClick={handleLink}
                  >
                    <img
                      width={145}
                      height={145}
                      alt='VoiceoverPodcast.com --answers to that question and more!'
                      src='/HowDidYouDOIt.webp'
                      className='icon'
                    />
                  </Link>
                </div>
              </article>
            </div>
          </section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
