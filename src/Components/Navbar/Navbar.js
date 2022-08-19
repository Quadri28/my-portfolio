import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook } from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import './Navbar.css'

const Navbar = () => {
  const [active, setActive]= useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActive ('#')} className={active === '#' ? 'active' : ''} > <AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActive ('#about')} className={active === '#about' ? 'active' : ''}> <AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActive ('#experience')} className={active === '#experience' ? 'active' : ''}> <BiBook/></a>
      <a href='#portfolio' onClick={()=>setActive ('#services')} className={active === '#services' ? 'active' : ''}> <RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActive ('#contact')} className={active === '#contact' ? 'active' : ''}> <BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Navbar
