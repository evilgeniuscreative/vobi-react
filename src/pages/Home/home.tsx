import './home.css';
import '../../css/buttons.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import type { RootState } from '../../app/store';
// import { useSelector } from 'react-redux';
import AudioVisualzation from '../../components/AudioVisualization/AudioVisualzation';
import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/24/outline';

const Home = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  const handleView = () => {
    window.open('/Ian_Kleinfeld_Acting_resume_2024.pdf', '_blank');
  };

  const handleDownload = () => {
    const pdfUrl = '/Ian_Kleinfeld_Acting_resume_2024.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = '/Ian_Kleinfeld_Acting_resume_2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className='content-container'>
        <Header></Header>
        <main>
          <div className='hero'>
            <div className='hero-icon'></div>
          </div>
        </main>
        <section className='main-section homepage'>
          <article className='main-left'>
            <h2>50% nice guy next door, 50% evil genius and voiceover mad scientist. 100% your choice.</h2>
            <p className='about-text'>
              I&apos;m Ian Kleinfeld, a dynamic voice talent with a boatload of enthusiasm, energy and
              creativity. I&apos;m a singer, songwriter, and drummer by hobby, and a voice actor by
              love. I&apos;ve done professional commercial and theater acting since 1995.
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
              Becker, Andy Roth, Deborah Sperling, Liz Atherton, the VO Dojo, and other coaches,
              seminars, and intensives.
            </p>
            <p className='about-text'>
              I&apos;m trained in stage acting at Cabrillo College, University of California Santa
              Cruz, and Jean Shelton Acting Studio.
            </p>

            <p>
              <div id='resume-links'>
                <span className='resume-text'>Resume:</span>
                <a
                  className='btn view'
                  onClick={handleView}
                >
                  <span className='icon-btn'>
                    <EyeIcon className='icon-eye' />
                  </span>
                  <span className='rl-text'>View</span>
                </a>

                <a
                  className='btn dl'
                  onClick={handleDownload}
                >
                  <span className='icon-btn'>
                    <ArrowDownTrayIcon className='icon-dlr' />
                  </span>

                  <span className='rl-text'>Download</span>
                </a>
              </div>
            </p>
          </article>
          <article className='main-right'>
            <h2>Demos</h2>
            <p className='about-text'>
              Please have a listen to my demos to see what kinds of things I can do for you.{' '}
            </p>
            <p className='about-text'>
              <Link
                to='https://calendly.com/voiceoverbyian'
                className='link-visible'
              >
                Book a free 15 minute phone call
              </Link>{' '}
              to discuss your project, your needs, vision, and how I can help you.
            </p>

            <p className='demo-title'>
              Commercial Demo
              {/* {count.playcommercial}, {count.pausecommercial}, {count.dlcommercial} */}
            </p>
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
