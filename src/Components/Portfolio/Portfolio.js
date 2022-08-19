import React from 'react'
import './Portfolio.css';
import IMG1 from  '../../assets/portfolio1.jpg'
import IMG2 from  '../../assets/portfolio2.jpg'
import IMG3 from  '../../assets/portfolio3.jpg'
import IMG4 from  '../../assets/portfolio4.jpg'
import IMG5 from  '../../assets/portfolio5.png'
import IMG6 from  '../../assets/portfolio6.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const data=[
  {
    id:1,
    image: IMG1,
    title:'title one',
    github: 'https://github',
    demo: 'site name'
  },
  {
    id:2,
    image: IMG2,
    title:'title one',
    github: 'https://github',
    demo: 'site name'
  },
  {
    id:3,
    image: IMG3,
    title:'title one',
    github: 'https://github',
    demo: 'site name'
  },
  {
    id:4,
    image: IMG4,
    title:'title one',
    github: 'https://github',
    demo: 'site name'
  },
  {
    id:5,
    image: IMG5,
    title:'title 5',
    github: 'https://github',
    demo: 'site name'
  },
  {
    id:6,
    image: IMG6,
    title:'title six',
    github: 'https://github',
    demo: 'site name'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container' data-aos='fade-down' data-aos-duration= '3000'>
        {
          data.map((item)=>{
            const{id, image, github, title, demo} = item
            return(
              <article className='portfolio__item' key={id}>
            <div className='porfolio__item-image'>
                <img src={image} alt='portfolio'/>
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>{github}</a>
            <a href='https://site.name' className='btn btn-primary' target='blank'>{demo}</a>
            </div>
        </article>
            )
          })

        }
        
        
        
      </div>
    </section>
  )
}

export default Portfolio
