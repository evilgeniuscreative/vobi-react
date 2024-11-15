import { Link } from 'react-router-dom';
import '../../App.css';

const Footer = () => {
  const handleLink = (url: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(url, '_blank');
  };
  return (
    <>
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
                onClick={handleLink('https://www.linkedin.com/in/voiceoverian/')}
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
                onClick={handleLink('https://www.instagram.com/voicebyian/')}
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
                onClick={handleLink('https://twitter.com/VoiceByIan')}
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
                onClick={handleLink('https://www.facebook.com/voicebyian')}
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
              onClick={handleLink('https://source-elements.com/find/iankleinfeld')}
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
                    onClick={handleLink('http://voiceoverpodcast.com')}
                  >
                    http://voiceoverpodcast.com
                  </Link>
                </p>
              </div>
              <div>
                <Link
                  to='http://voiceoverpodcast.com'
                  onClick={handleLink('http://voiceoverpodcast.com')}
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
    </>
  );
};

export default Footer;
