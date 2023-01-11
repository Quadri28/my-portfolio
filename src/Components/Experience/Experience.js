import React from 'react'
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


const Experience = () => {
  return (
    <section id='experience'>
      <h5> what skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__frontend' data-aos='fade-left' data-aos-duration= '3000'>
        <div className='experience__content'>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                  <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4>React Js</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4>PHP/Laravel</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4>Redux & Redux/Toolkit</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4> Github VC</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__icons'/>
                <div>
                <h4>Material UI</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
        </div>
      </div>
      
    
    </section>
  )
}

export default Experience
