import React,{useRef} from 'react'
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_0sz9qqg', 'template_0v7a8md', form.current, 'AOJsTx9dCzmrEY5pf')
      e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>soliuabdulkadir28@gmail.com</h5>
              <a href='mailto:soliuabdulkadir28@gmail.com' target='blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Quadri Abiola</h5>
              <a href='https://m.me/?_rdc=1&_rdr' target='blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp contact__option-icon/>
              <h4>Whatsapp</h4>
              <h5>+2348131215178</h5>
              <a href='https://api.whatsapp.com/send?phone=2348131215178' target='blank'>Send a message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name'/>
          <input type='email' name='email' placeholder='Your Email'/>
          <textarea name='message' rows='7' required placeholder='Your message'> </textarea>
          <button type='submit' className='btn bnt-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
