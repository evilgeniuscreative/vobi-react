import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AudioVisualzation from './components/AudioVisualization/AudioVisualzation';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
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
              Becker, Andy Roth, Deborah Sperling, and other coaches, seminars, and intensives.
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
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
