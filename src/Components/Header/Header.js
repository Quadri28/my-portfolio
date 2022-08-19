
import React from 'react'
import CTA from '../CTA'
import Me from '../../assets/me.png'
import HeaderSocials from '../HeaderSocials'
import './Header.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


const Header = () => {
  return (
    <header className='header'>
      <div className = 'container header__container'>
        <h5> Hello I'm</h5>
        <h2>AbdulQuadri</h2>
        <h5 className='text-light'>
        Frontend Developer
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me' >
            <img src={Me} alt='me' data-aos='fade-up' datat-aos-easing='linear' data-aos-duration='2000'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}


export default Header
