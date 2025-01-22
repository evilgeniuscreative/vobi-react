// @ts-ignore
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Layout from '../../components/Layout/Layout';
import './testimonials.css';
import AudioVisualzation from '../../components/AudioVisualization/AudioVisualzation';
import { ArrowDownTrayIcon, EyeIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  return (
    <>
      <Layout
        mainClasses='main-page'
        sectionClasses='main-content'
        articleClasses='main-single'
        headingText='Testimonials'
      >
        <div className='testimonial-container'>
          <table className='testimonial-table'>
            <tbody>
              <tr>
                <td className='test-left'>
                  <article className='testimonial'>
                    I've worked with a lot of voice actors in my career, and every job requires
                    something unique. In this case, I was searching for a Bill Nye sound-alike. I
                    combed through dozens of disappointing auditions, until… voila! Ian Kleinfeld.
                    He hit the mark perfectly. Then, once we got down to the actual job, Ian proved
                    that he's as professional as it gets. Very responsive, super-easy to communicate
                    with, multi-talented, and handed over perfectly professional files in a timely
                    way. And because he does so much more than a great Bill Nye impersonation, I'll
                    be going back to work with him on other jobs.
                    <aside>
                      <div className='testimonial-name'>Christopher Healey, Doner.CX EVP</div>
                      <div className='testimonial-job-title'>Executive Creative Director</div>
                    </aside>
                  </article>
                </td>
                <td>
                  <article>
                    <AudioVisualzation audioSrc='billnye'></AudioVisualzation>
                  </article>
                </td>
              </tr>
              <tr>
                <td>
                  <article className='testimonial'>
                    Description: Series of ads for Blue Cross Blue Shield NC with a sports theme.
                    <aside>
                      <div className='testimonial-name'>BCBSNC</div>
                      <div className='testimonial-job-title'>Blue Cross Blue Shield NC</div>
                    </aside>
                  </article>
                </td>
                <td>
                  <article>
                    <AudioVisualzation audioSrc='bcbs1'></AudioVisualzation>
                  </article>
                </td>
              </tr>
              <tr>
                <td>
                  <article className='testimonial'>
                    Need a voice actor? Hire Ian Kleinfeld. Ian is helping my indie game by fitting
                    as a narrator character. He is polite and professional and a delight to work
                    with, with a wide range of capabilities. I've gotten exactly what I want. I
                    highly recommend Ian. Find that voice to narrate your commercial or thoughts.
                    Fill in that character voice or expression your game is missing.{' '}
                    <Link to='https://calendly.com/voiceoverbyian'>Book a Call with Ian.</Link>
                    <aside>
                      <div className='testimonial-name'>Tim Fox, Aura Online</div>
                      <div className='testimonial-job-title'>Aura Online CEO</div>
                    </aside>
                  </article>
                </td>
                <td>
                  <article>
                    <AudioVisualzation audioSrc='bcbs2'></AudioVisualzation>
                  </article>
                </td>
              </tr>

              <tr>
                <td>
                  <article className='testimonial'>
                    Ian voiced and edited a 7,500 word online informercial for us in just a few
                    days, so that I didn't have to. With a little practice, His impression of me was
                    so good that I could have it done and take care of more important business
                    issues than reading a script. He was very professional and easy to work with and
                    direct and I would definitely recommend him to anyone needing a voiceover. 5
                    stars!
                    <aside>
                      <div className='testimonial-name'>Elias Ghosn</div>
                      <div className='testimonial-job-title'>G-Plans</div>
                    </aside>
                  </article>
                </td>
                <td>
                  <article>
                    <AudioVisualzation audioSrc='aura'></AudioVisualzation>
                  </article>
                </td>
              </tr>
              <tr>
                <td>
                  <article className='testimonial'>
                    Ian quickly and professionally recorded a voiceover for a video we were
                    producing. He was able to capture the tone and style we were looking for
                    perfectly. His turnaround time was very quick, and the quality of the recording
                    was top-notch. We will definitely be using his services again in the future.
                    <aside>
                      <div className='testimonial-name'>Kelly Sommerville</div>
                      <div className='testimonial-job-title'>Threshold Enterprises Ltd.</div>
                    </aside>
                  </article>
                </td>
                <td>
                  <article>
                    <AudioVisualzation audioSrc='threshold'></AudioVisualzation>
                  </article>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <article className='attribution'>
          <a
            href='https://www.flaticon.com/free-icons/quotation-marks'
            title='quotation marks icons'
          >
            Quotation marks icons created by Rahul Kaklotar - Flaticon
          </a>
        </article>
      </Layout>
    </>
  );
};

export default Testimonials;
