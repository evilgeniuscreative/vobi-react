import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AudioVisualzation from '../../components/AudioVisualization/AudioVisualzation';

const Home = () => {
  return (
    <>
      <div>
        <Header></Header>
        <main>
          <div className='hero'>
            <img
              src={window.innerWidth <= 768 ? './durham-ian.jpg' : './durham-ian-sm.jpg'}
              alt=''
            />
          </div>
        </main>
        <section className='main-section homepage'>
          <article className='main-left'>
            <h2 className='heading'>
              50% guy next door, 50% evil genius mad scientist. 100% your choice.
            </h2>
            <p className='about-text'>
              I&apos;m Ian Kleinfeld, a voice talent with a boatload of enthusiasm, energy and
              creativity. I&apos;m a singer, songwriter, and drummer by hobby, and a voice actor by
              love. I&apos;ve done professional commercial and theater acting since 1995.{' '}
            </p>
            <p className='about-text'>
              My favorite place to be, my “happy place,” is in the studio, whether for voice or
              music. I have a professional studio with Source Connect Standard, planned and tuned by
              Frank Verderosa, though I always super enjoy going out to a top-tier studio when I
              have the chance.
            </p>
            <p className='about-text'>
              I bring professionalism, creativity, energy, problem-solving skills, and FUN to every
              project I work on.
            </p>
            <p className='about-text'>
              {' '}
              I am trained in voice acting through sessions or classes with Anna Garduno, Roger
              Becker, Andy Roth, Deborah Sperling, and other coaches, seminars, and intensives.
            </p>
            <p className='about-text'>
              I&apos;m trained in stage acting at Cabrillo College, University of California Santa
              Cruz, and Jean Shelton Acting Studio.
            </p>
          </article>
          <article className='main-right'>
            <h2 className='heading'>Demos</h2>
            <p>Please have a listen to my demos to see what kinds of things I can do for you. </p>
            <p>
              <Link
                to='https://calendly.com/voiceoverbyian'
                className='link-visible'
              >
                Book a free 15 minute phone call
              </Link>{' '}
              to discuss your project, your needs, vision, and how I can help you.
            </p>

            <p className='demo-title'>Commercial Demo</p>
            <AudioVisualzation audioSrc='commercial'></AudioVisualzation>

            <p className='demo-title'>Character / Game / Animation Demo</p>
            <AudioVisualzation audioSrc='character'></AudioVisualzation>
          </article>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
