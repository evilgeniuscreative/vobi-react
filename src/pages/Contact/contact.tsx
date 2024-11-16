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
        <main>
          <section className='main-section'>
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
          </section>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;
