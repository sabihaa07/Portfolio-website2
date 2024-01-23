import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { RiWhatsappLine } from "react-icons/ri";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3bfgd2', 'template_5ufw1q6', form.current, 'r6TodiitC2lt1J1Sw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();

  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>dummymail@gmail.com</h5>
            <a href="mailto:dummymail@gmail.com" target='_blank'>Send a message </a>
          </article>

          <article className="contact_option">
            <PiMessengerLogoBold />
            <h4>Messenger</h4>
            <h5>FullStack tutorials</h5>
            <a href="https://www.messenger.com" target='_blank'>Send a message </a>
          </article>

          <article className="contact_option">
            <RiWhatsappLine />
            <h4>WhatsApp</h4>
            <h5>+1234567890</h5>
            <a href="https://web.whatsapp.com/send?phone+1234567890" target='_blank'>Send a message </a>
          </article>
        </div>

        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email Id' required />
          <textarea name="message" rows="8" placeholder='Your Message' required ></textarea>
          <button type='submit' className="btn btn-primary">Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
