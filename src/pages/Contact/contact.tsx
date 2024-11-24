import '../../css/buttons.css';
import './contact.css';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [hasSent, setHasSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('vobi_ejyp16a', 'template_3zo0v5m', form.current, '41CWR9J7p79kVgXoW').then(
        () => {
          document.getElementById('contact-form')?.classList.add('fade-out');
          setHasSent(true);
          console.log('SUCCESS!', hasSent);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    }
  };

  return (
    <>
      <Layout
        mainClasses='main-page'
        sectionClasses='contact-page'
        articleClasses='main-single'
        headingText=''
      >
        <div className='main-text contact-content'>
          <h2>Contact</h2>
          <p>
            <Link
              to='https://calendly.com/voiceoverbyian'
              className='link-visible'
            >
              Book a free 15 minute phone call
            </Link>{' '}
            to discuss your project, your needs, vision, and how I can help you.
          </p>
          <p>
            I'd love to hear from you! If you prefer, please fill out the form below to get in touch
            with me, or call me at{' '}
            <Link
              className='link-visible'
              to='tel:19193576004'
            >
              (919) 357-6004
            </Link>{' '}
            from 9am - 5pm any day (US EST / GMT -4).
          </p>
        </div>
        <div className='inputs'>
          {hasSent === false && (
            <form
              id='contact-form'
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Name</label>
              <input
                type='text'
                name='user_name'
              />
              <label>Email</label>
              <input
                type='email'
                name='user_email'
              />
              <label>Message</label>
              <textarea
                cols={30}
                rows={8}
                name='message'
              />
              <input
                className='btn btn-submit'
                type='submit'
                value='Send'
              />
            </form>
          )}
          {hasSent === true ? (
            <div className='contact-success fade-in'>
              <h2>Thank you for your message!</h2>
              <p>I will get back to you as soon as possible.</p>
              <p>
                If you need to reach me sooner, please feel free to call
                <br />{' '}
                <Link
                  className='link-visible'
                  to='tel:19193576004'
                >
                  (919) 357-6004
                </Link>{' '}
                <br /> from 9am - 5pm any day of the week. (US EST / GMT -4).{' '}
              </p>
            </div>
          ) : (
            ''
          )}
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206576.68232974663!2d-79.0497177348751!3d36.00171418468436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace471120f66f1%3A0xe17ada898a46f27e!2sDurham%2C%20NC!5e0!3m2!1sen!2sus!4v1731823526473!5m2!1sen!2sus'
            style={{ border: 0 }}
            loading='lazy'
            allowFullScreen={true}
          ></iframe>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
