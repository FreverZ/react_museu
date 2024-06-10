import React from 'react'

import PropTypes from 'prop-types'

import './reviews.css'

const Reviews = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="reviews-max-width thq-section-max-width">
        <div className="reviews-section-title">
          <h2 className="reviews-title thq-heading-2">{props.heading1}</h2>
        </div>
        <div className="reviews-content thq-flex-row">
          <div className="reviews-column thq-card thq-flex-column">
            <div className="reviews-stars">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
            </div>
            <span className="reviews-text thq-body-small">{props.review1}</span>
            <div className="reviews-avatar">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="reviews-avatar-image thq-img-ratio-1-1 thq-img-round"
              />
              <div className="reviews-avatar-content">
                <span className="reviews-text1 thq-body-small">
                  {props.author1Name}
                </span>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
            </div>
          </div>
          <div className="reviews-column1 thq-card thq-flex-column">
            <div className="reviews-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
            </div>
            <span className="reviews-text3 thq-body-small">
              {props.review2}
            </span>
            <div className="reviews-avatar1">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="reviews-avatar-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="reviews-avatar-content1">
                <span className="reviews-text4 thq-body-small">
                  {props.author2}
                </span>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
            </div>
          </div>
          <div className="reviews-column2 thq-card thq-flex-column">
            <div className="reviews-stars2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path
                  d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
                  className=""
                ></path>
              </svg>
            </div>
            <span className="reviews-text6 thq-body-small">
              {props.review3}
            </span>
            <div className="reviews-avatar2">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="reviews-avatar-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="reviews-avatar-content2">
                <span className="reviews-text7 thq-body-small">
                  {props.author3}
                </span>
                <span className="thq-body-small">{props.author3Position}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Reviews.defaultProps = {
  author2Alt: 'Author Avatar',
  author3Src:
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1500',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  author2: 'Author Name',
  author2Src:
    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1500',
  review3:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  review1:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  author3Alt: 'Author Avatar',
  author3: 'Author Name',
  author1Name: 'Author Name',
  author2Position: 'Position, Company name',
  author1Position: 'Position, Company name',
  heading1: 'User Reviews',
  author3Position: 'Position, Company name',
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1500',
  rootClassName: '',
  review2:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  author1Alt: 'Author Avatar',
}

Reviews.propTypes = {
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
  content1: PropTypes.string,
  author2: PropTypes.string,
  author2Src: PropTypes.string,
  review3: PropTypes.string,
  review1: PropTypes.string,
  author3Alt: PropTypes.string,
  author3: PropTypes.string,
  author1Name: PropTypes.string,
  author2Position: PropTypes.string,
  author1Position: PropTypes.string,
  heading1: PropTypes.string,
  author3Position: PropTypes.string,
  author1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  review2: PropTypes.string,
  author1Alt: PropTypes.string,
}

export default Reviews
