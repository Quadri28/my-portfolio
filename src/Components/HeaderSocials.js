import React from 'react'
import {BsLinkedin} from 'react-icons/bs' ;
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/abdulkadir-soliu-b514561a6/' target='blank'>
        <BsLinkedin/>
      </a>
      <a href='https://github.com/Quadri28' target='blank'>
    <FaGithub/>
    </a >
     <a href='https://www.instagram.com/soliu220/' target='blank'>
    <BsInstagram/>
    </a>
    </div>
  )
}

export default HeaderSocials
