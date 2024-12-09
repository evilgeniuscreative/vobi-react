// @ts-ignore
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import './about.css';
import Layout from '../../components/Layout/Layout';
import '../../App.css';

const About = () => {
  return (
    <>
      <Layout
        mainClasses='main-page'
        sectionClasses='main-content'
        articleClasses='main-single'
        headingText='About'
      >


        <figure className='about-image'>
          <img
            src='./ian-studio-20211113.jpg'
            alt='Ian Kleinfeld in the studio'
          />
        </figure>

        <p>
          Hi, I'm Ian Kleinfeld, a voice talent with a boatload of enthusiasm, energy and
          creativity. I'm a singer, songwriter, and drummer by hobby, and a voice actor by love.
          I’ve done professional commercial and theater acting since 1995.
        </p>
        <p>
          My favorite place to be, my “happy place,” is in the studio, whether for voice or music. I
          have a professional studio with Source Connect Standard, planned and tuned by Frank
          Verderosa, though I always super enjoy going out to a top-tier studio when I have the
          chance.
        </p>
        <p>
          I bring professionalism, creativity, energy, problem-solving skills, and FUN to every
          project I work on.
        </p>
        <p>
          Whether it's figuring out how to make three voice actors and a folding table sound like a
          stadium full of fans or as the narrator or random character the client didn't know they
          needed until the last minute. In short, I'm flexible and there 100%.
        </p>

        <p className='icon-callout'>
          <ChevronRightIcon className='icon-floaty-left' />I can work with you remotely with{' '}
          <span className='emp'>
            SourceConnect Standard, Zoom, Teams, Phone (single or multiple participants), E-mail,
            and/or back-and-forth with files
          </span>{' '}
          until you're completely satisfied with the outcome.
        </p>

        <p>
          I am trained in voice acting through sessions or classes with Anna Garduno, Roger Becker,
          Andy Roth, Deborah Sperling, The VOdojo, and other coaches. I'm trained in stage acting at
          UCSC and the Jean Shelton Acting Studio.
        </p>
      </Layout>
    </>
  );
};

export default About;
