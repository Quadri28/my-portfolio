import React from 'react'
import './Portfolio.css';
import IMG1 from  '../../assets/portfolio1.jpg'
import IMG2 from  '../../assets/portfolio2.jpg'
import IMG3 from  '../../assets/portfolio3.jpg'
import IMG4 from  '../../assets/portfolio4.jpg'
import IMG5 from  '../../assets/portfolio5.jpg'
import IMG7 from  '../../assets/portfolio7.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const data=[
  {
    id:1,
    image: IMG1,
    title:'Unified Cooperative (React js)',
    github: 'https://github.com/Quadri28/unanj',
    demo: 'https://solutions.cooplatform.com.ng/'
  },
  {
    id:2,
    image: IMG2,
    title:'E-commerce (React js)',
    github: 'https://github.com/Quadri28/my-shop',
    demo: 'https://shopryte.netlify.app'
  },
  {
    id:3,
    image: IMG3,
    title:'Recipe App (React js)',
    github: 'https://github.com/Quadri28/Recipe-App',
    demo: 'https://recipedictionary.netlify.app'
  },
  {
    id:4,
    image: IMG4,
    title:"A client's portfolio (React js)",
    github: 'https://github.com/sheriffjimoh/Justin_portfolio',
    demo: 'https://re-0001.netlify.app/'
  },
  {
    id:5,
    image: IMG5,
    title:'A tour site (React js)',
    github: 'https://github.com/Quadri28/react-tour-website',
    demo: 'https://tourtheplain.netlify.app'
  },

  {
    id:7,
    image: IMG7,
    title:'A fitness app with full E-commerce features (Laravel)',
    github: 'https://github.com/Quadri28/iamfit',
    demo: 'https://iamfit.ng'
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
            <a href={github} className='btn'>{github.substring(0, 15)}</a>
            <a href={demo} className='btn btn-primary' target='blank'>{demo.substring(0, 10)}</a>
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
