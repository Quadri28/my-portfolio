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
    title:'My Porfolio',
    github: 'https://github.com/Quadri28/my-portfolio',
    demo: 'https://devquadriportfolio.netlify.app'
  },
  {
    id:2,
    image: IMG2,
    title:'E-commerce',
    github: 'https://github.com/Quadri28/my-shop',
    demo: 'https://shopryte.netlify.app'
  },
  {
    id:3,
    image: IMG3,
    title:'Recipe App',
    github: 'https://github.com/Quadri28/Recipe-App',
    demo: 'https://recipedictionary.netlify.app'
  },
  {
    id:4,
    image: IMG4,
    title:"A client's portfolio",
    github: 'https://github.com/sheriffjimoh/Justin_portfolio',
    demo: 'https://justin-resume.netlify.app'
  },
  {
    id:5,
    image: IMG5,
    title:'A tour site',
    github: 'https://github.com/Quadri28/react-tour-website',
    demo: 'https://tourtheplain.netlify.app'
  },
  {
    id:6,
    image: IMG6,
    title:'Maid and Job site',
    github: 'https://github.com/Quadri28/maidinaddis.com',
    demo: 'https://maidinaddisababa.netlify.app/'
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
