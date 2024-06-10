import React from 'react'

import PropTypes from 'prop-types'

import './description.css'

const Description = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="description-max-width thq-section-max-width">
        <div className="description-container01">
          <h2>{props.title1}</h2>
          <span className="description-text1 thq-body-small">
            {props.content1}
          </span>
          <div className="description-container02"></div>
        </div>
        <div className="description-timeline-container">
          <div className="description-step1">
            <div className="description-container03">
              <div className="description-container04"></div>
              <div className="description-progress0"></div>
            </div>
            <div className="description-container05">
              <h3 className="thq-heading-3">{props.date1}</h3>
              <h3 className="description-text3 thq-heading-3">
                {props.card1Heading}
              </h3>
              <span className="thq-body-small">{props.card1Content}</span>
              <div className="description-container06"></div>
            </div>
          </div>
          <div className="description-step2">
            <div className="description-container07">
              <div className="description-container08"></div>
              <div className="description-progress01"></div>
            </div>
          </div>
          <div className="description-step3">
            <div className="description-container09">
              <div className="description-container10"></div>
              <div className="description-progress02"></div>
            </div>
          </div>
          <div className="description-step4">
            <div className="description-container11">
              <div className="description-container12"></div>
              <div className="description-progress03"></div>
            </div>
            <div className="description-container13">
              <h3 className="description-text5 thq-heading-3">
                {props.card4Heading}
              </h3>
              <span className="thq-body-small">{props.card4Content}</span>
              <div className="description-container14"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Description.defaultProps = {
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  card1Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  date1: '23/04/2023',
  card4Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  title1: 'Long heading going here',
  card4Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  card1Heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

Description.propTypes = {
  content1: PropTypes.string,
  card1Content: PropTypes.string,
  date1: PropTypes.string,
  card4Content: PropTypes.string,
  title1: PropTypes.string,
  card4Heading: PropTypes.string,
  card1Heading: PropTypes.string,
}

export default Description
