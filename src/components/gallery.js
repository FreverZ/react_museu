import React from 'react'

import PropTypes from 'prop-types'

import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-gallery3 thq-section-padding">
      <div className="gallery-max-width thq-section-max-width">
        <div className="gallery-content">
          <div className="gallery-container">
            {props.image1Src && (
              <img
                src={props.image1Src}
                alt="Image 1"
                className="gallery-image1 thq-img-ratio-1-1"
              />
            )}
            {props.image2Src && (
              <img
                src={props.image2Src}
                alt="Image 2"
                className="gallery-image2 thq-img-ratio-1-1"
              />
            )}
          </div>
          <div className="gallery-container1">
            {props.image3Src && (
              <img
                src={props.image3Src}
                alt="Image 3"
                className="gallery-image3 thq-img-ratio-4-3"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.defaultProps = {
  image1Src: '',
  image2Src: '',
  image3Src: '',
};

export default Gallery;
