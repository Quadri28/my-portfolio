import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>DEV QUADRI</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experince</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonial'>Testimonial</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
    <a href='https://facebook.com'> <FaFacebook/> </a>
    <a href='https://instagram.com'><FiInstagram/> </a>
    <a href='https://twitter.com'> <IoLogoTwitter/></a>

    </div>
      <div className='footer_copyright'>
        <small> &copy; Dev Quadri. All rights reserved { new Date().getFullYear()}. </small>
      </div>
    </footer>
  )
}

export default Footer
