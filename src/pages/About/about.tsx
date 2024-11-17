import '../../App.css';
// import './about.css';
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <>
      <div>
        <Header></Header>
        <main className='main-page'>
          <section className='main-single'>
            <h2 className='heading'>About</h2>
            <p>
              Hi, I'm Ian Kleinfeld, a voice talent with a boatload of enthusiasm, energy and
              creativity. I'm a singer, songwriter, and drummer by hobby, and a voice actor by love.
              I’ve done professional commercial and theater acting since 1995.
            </p>
            <p>
              My favorite place to be, my “happy place,” is in the studio, whether for voice or
              music. I have a professional studio with Source Connect Standard, planned and tuned by
              Frank Verderosa, though I always super enjoy going out to a top-tier studio when I
              have the chance.
            </p>
            <p>
              I bring professionalism, creativity, energy, problem-solving skills, and FUN to every
              project I work on.
            </p>
            <p>
              Whether it's figuring out how to make three voice actors and a folding table sound
              like a stadium full of fans or as the narrator or random character the client didn't
              know they needed until the last minute. In short, I'm flexible and there 100%.
            </p>

            <p>
              I am trained in voice acting through sessions or classes with Anna Garduno, Roger
              Becker, Andy Roth, Deborah Sperling, The VOdojo, and other coaches. I'm trained in
              stage acting at UCSC and the Jean Shelton Acting Studio.
            </p>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default About;
