import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME} alt='me'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> 3+ years programming </small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon'/>
            <h5>Clients</h5>
            <small> 5+ Worldwide </small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 20+ completed projects</small>
            </article>
          </div>
          <p>lore ipsum dolliot suit manel tetc phoone miners state posci shels pasat prodis duit humme git jumo shwio diool</p>
          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
