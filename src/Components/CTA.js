
import React from 'react'
import CV from '../assets/cv.docx'
const CTA = () => {
  return (
    <div className='cta'>
      <a href='' download={CV} className='btn'>Download CV</a>
      <a href='#contact' className='btn-primary btn'>Let's Talk</a>

    </div>
  )
}

export default CTA
