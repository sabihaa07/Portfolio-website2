import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:2,
    image: IMG2,
    title: 'Chart templates $ infographics in Figma',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com/shots/23099880-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  {
    id:3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data designing',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com/shots/23441431-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id:4,
    image: IMG4,
    title: 'Maintaining task and tracking progress ',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com'
  },
  {
    id:5,
    image: IMG5,
    title: 'Chart templates $ infographics in Figma',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com'
  },
  {
    id:6,
    image: IMG6,
    title: 'Chart templates $ infographics in Figma',
    github: 'https://github.com',
    dribbble: 'https://dribbble.com/shots/23099880-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  }
]

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
        data.map(({id,image,title,github,demo}) => {
        return(
        <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className="btn" target='_blank'>Github</a>
          <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
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
