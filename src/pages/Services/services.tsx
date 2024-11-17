import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Services = () => {
  return (
    <>
      <div>
        <Header></Header>
        <main className='main-page'>
          <section className='main-single'>
            <h2 className='heading'>Services</h2>
            <div className='services'>
              <p>I provide a variety of voiceover services, including:</p>
              <ul className='services-list'>
                <li>Commercials</li>
                <li>Animation</li>
                <li>Character voices</li>
                <li>Explainer videos</li>
                <li>Narration</li>
                <li>Medical Narration</li>
                <li>eLearning</li>
                <li>Audio Editing</li>
                <li>Video Editing</li>
              </ul>
              <p>
                I can provide a variety of formats, including MP3, WAV, AIFF, and more. I can also
                provide fully produced audio, including music and sound effects.
              </p>
              <p>
                I can deliver your audio (or video) via email, Dropbox, Google Drive, or any other
                method you prefer.
              </p>
              <p>
                Please{' '}
                <Link
                  to='/contact'
                  className='link-visible'
                >
                  contact
                </Link>{' '}
                me to discuss your project and how I can help you bring it to life.
              </p>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Services;
