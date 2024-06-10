import React from 'react'

import PropTypes from 'prop-types'

import Gallery from './gallery'
import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header26 thq-section-padding">
      <div className="hero-max-width thq-flex-column thq-section-max-width">
        <div className="hero-column">
          <div className="hero-content">
            <h1 className="hero-text thq-heading-1">{props.heading1}</h1>
            <p className="hero-text1 thq-body-large">{props.content1}</p>
            <div className="hero-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image1Alt: 'Image',
  action1: 'Main action',
  image1Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  action2: 'Secondary action',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  heading1: 'Catchy and impactful hero headline',
}

Hero.propTypes = {
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  image1Src: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Hero
