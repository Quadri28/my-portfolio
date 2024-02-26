import React, { useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>soliuabdulkadir28@gmail.com</h5>
            <a href="mailto:soliuabdulkadir28@gmail.com" target="blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Quadri Abiola</h5>
            <a href="https://m.me/?_rdc=1&_rdr" target="blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp contact__option-icon />
            <h4>Whatsapp</h4>
            <h5>+2348131215178</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2348131215178"
              target="blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            onChange={handleChange}
            className="form-inputs"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="form-inputs"
          />
          <textarea
            name="message"
            rows="7"
            required
            placeholder="Your message"
            onChange={handleChange}
            className="form-inputs"
          ></textarea>
          <a
            type="submit"
            className="btn bnt-primary"
            href={`mailto:soliuabdulkadir28@gmail.com?subject=Client reach-out&body=Hello AbdulQuadri %0A%0D I am ${contact.name} with email: ${contact.email}. %0A%0D ${contact.message}`}
          >
            Send Message
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
