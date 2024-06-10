import React from 'react'

import PropTypes from 'prop-types'

import './stats.css'

const Stats = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats-max-width thq-section-max-width">
        <div className="stats-container1">
          <h2 className="thq-heading-2 stats-title">{props.heading1}</h2>
        </div>
        <div className="stats-container2">
          <div className="stats-container3">
            <h2 className="thq-heading-2">{props.stat1}</h2>
            <span className="thq-body-small stats-text1">
              {props.stat1Description}
            </span>
          </div>
          <div className="stats-container4">
            <h2 className="thq-heading-2">{props.stat2}</h2>
            <span className="thq-body-small stats-text3">
              {props.stat2Description}
            </span>
          </div>
          <div className="stats-container5">
            <h2 className="thq-heading-2">{props.stat3}</h2>
            <span className="thq-body-small stats-text5">
              {props.stat3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats.defaultProps = {
  stat2: '44%',
  stat1: '99%',
  stat3Description: 'Customer satisfaction',
  stat2Description: 'Active users',
  stat1Description: 'Customer satisfaction',
  stat3: '99%',
  heading1: 'Business value of teleportHQ',
}

Stats.propTypes = {
  stat2: PropTypes.string,
  stat1: PropTypes.string,
  stat3Description: PropTypes.string,
  stat2Description: PropTypes.string,
  stat1Description: PropTypes.string,
  stat3: PropTypes.string,
  heading1: PropTypes.string,
}

export default Stats
