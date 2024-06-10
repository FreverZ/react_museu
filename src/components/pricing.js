import React from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-pricing3 thq-section-padding">
      <div className="pricing-max-width thq-section-max-width">
        <div className="pricing-section-title">
          <div className="pricing-content">
            <h2 className="pricing-text thq-heading-2">{props.heading1}</h2>
          </div>
        </div>
        <div className="pricing-content1 thq-card">
          <img
            id="/logo_255-200h.png"
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="pricing-image thq-team-image-round"
          />
          <div className="thq-divider-horizontal"></div>
          <div className="pricing-list">
            <div className="pricing-list-item">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature1}</span>
            </div>
            <div className="pricing-list-item1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature2}</span>
            </div>
            <div className="pricing-list-item2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature3}</span>
            </div>
            <div className="pricing-list-item3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
              <span className="thq-body-small">{props.plan1Feature5}</span>
            </div>
          </div>
          <div className="thq-divider-horizontal"></div>
          <div className="pricing-price">
            <h3 className="pricing-text5 thq-heading-3">{props.plan1Price}</h3>
          </div>
          <button className="pricing-button thq-button-filled">
            <span className="thq-body-small">{props.plan1Action}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Pricing.defaultProps = {
  plan1: '',
  plan1Feature1: '',
  plan1Feature5: '',
  content2: '',
  plan1Detail: '',
  heading1: '',
  content1: '',
  imageSrc1: '',
  plan1Feature3: '',
  plan1Yearly: '',
  imageAlt1: '',
  imageAlt: '',
  plan1Feature2: '',
  plan1Action: '',
  plan1Price: '',
  plan1Feature4: '',
  imageSrc: '',
}

Pricing.propTypes = {
  plan1: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan1Feature5: PropTypes.string,
  content2: PropTypes.string,
  plan1Detail: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  imageSrc1: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan1Yearly: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan1Action: PropTypes.string,
  plan1Price: PropTypes.string,
  plan1Feature4: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Pricing
