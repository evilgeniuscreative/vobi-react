import '../../css/buttons.css';
import React, { useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('vobi_ejyp16a', 'YOUR_TEMPLATE_ID', form.current, '41CWR9J7p79kVgXoW').then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    }
  };

  return (
    <>
      <div>
        <Header></Header>
        <main className='main-page'>
          <section className='main-single contact-page'>
            <h2 className='heading contact-page'>Contact</h2>
            <article className='inputs'>
              <form
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

              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206576.68232974663!2d-79.0497177348751!3d36.00171418468436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace471120f66f1%3A0xe17ada898a46f27e!2sDurham%2C%20NC!5e0!3m2!1sen!2sus!4v1731823526473!5m2!1sen!2sus'
                width='300'
                height='360'
                style={{ border: 0, margin: '35px' }}
                loading='lazy'
                allowFullScreen={true}
              ></iframe>
            </article>
          </section>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;
