import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div className={`contact-container thq-section-padding ${props.rootClassName} `}>
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-content thq-flex-row">
          <div className="contact-content1">
            <h2 className="thq-heading-2 contact-text">{props.heading1}</h2>
          </div>
        </div>
        <div className="contact-content2 thq-flex-row">
          <div className="contact-container1">
            <iframe
              src={props.location1GoogleMap}
              title="Map"
              className="contact-iframe"
            ></iframe>
          </div>
          <div className="contact-container2">
            <h3 className="contact-text1 thq-heading-3">{props.location2}</h3>
            <p className="contact-text2 thq-body-large">
              {props.location2Details}
            </p>
            <div className="contact-container3">
              <span className="thq-button-flat thq-body-small">
                Obter Direções
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  location2GoogleMap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074523.670003402!2d-10.962271399936766!3d41.189845226988815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19330dd0753635%3A0x893a61d0a72083b!2sMuseu%20Calouste%20Gulbenkian!5e0!3m2!1spt-PT!2spt!4v1718052796991!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  rootClassName: '',
  location2Details: 'Avenida de Berna 45A, 1067-001 Lisboa, Portugal',
  location1GoogleMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074523.670003402!2d-10.962271399936766!3d41.189845226988815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19330dd0753635%3A0x893a61d0a72083b!2sMuseu%20Calouste%20Gulbenkian!5e0!3m2!1spt-PT!2spt!4v1718052796991!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  location1Details: '',
  heading1: 'Visita-nos',
  content1: '',
  location2: '',
  location1: '',
}

Contact.propTypes = {
  location2GoogleMap: PropTypes.string,
  rootClassName: PropTypes.string,
  location2Details: PropTypes.string,
  location1GoogleMap: PropTypes.string,
  location1Details: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  location2: PropTypes.string,
  location1: PropTypes.string,
}

export default Contact
