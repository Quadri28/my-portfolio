import React from 'react'
import './Testimonial.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AVTR1 from  '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from  '../../assets/avatar3.jpg'
import AVTR4 from  '../../assets/avatar4.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


const data =[
  {
    avatar:AVTR1,
    name: 'Justin Ukaegbu',
    review: 'Nice work, you have done exactly the replica of the provided design and that too in no time'
    
  },
  {
    avatar: AVTR2,
    name: 'Shata Wale',
    review: 'lorema  inspo sjoenm ksd s klkmlld kkori chai dammy suci james jaun min das torret  cup kiss diso maine dashe ot romesli yummy unmaiou thise hime honey thrive these mopies dhells'
    
  },
  {
    avatar: AVTR3,
    name: 'Kwam Despite',
    review: 'lorema  inspo sjoenm ksd s klkmlld kkori chai dammy suci james jaun min das torret  cup kiss diso maine dashe ot romesli yummy unmaiou thise hime honey thrive these mopies dhells'
    
  },
  {
    avatar: AVTR4,
    name: 'Mana Ana',
    review: 'lorema  inspo sjoenm ksd s klkmlld kkori chai dammy suci james jaun min das torret  cup kiss diso maine dashe ot romesli yummy unmaiou thise hime honey thrive these mopies dhells'
    
  },
]

const Testimonial = () => {
 
  return (
    <section id='testimonial'>
      <h5>Review from clients </h5>
      <h2>Testimonials</h2>
      <div className='container testimonial__container'>
      <Splide options={{perPage: 1, pagination: true, arrows: false}} >
     
          {
            data.map((item)=>{
              const {index, review, name, avatar}= item
              return(
                <SplideSlide>
                <article className='testimonial' key={index} data-aos='fade-left' data-aos-duration='2000'>
                <div className='client__avatar'>
                  <img src={avatar} alt='client'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </article>
              </SplideSlide>
              )
            })
          }
      </Splide>
        
      </div>
    </section>
  )
}

export default Testimonial
