import React from 'react';
import {Link} from 'react-router';
import ImageGallery from 'react-image-gallery';
import dicksHamburgerJoint from '../pics/hamburger.jpg';
import deceptionPassBridge from '../pics/deception_pass.jpg';
import deceptionPassWater from '../pics/deception_pass1.jpg';

class MyComponent extends React.Component {
  handleImageLoad(event) {}
  render() { 
    const images = [
      {original: dicksHamburgerJoint},
      {original: deceptionPassBridge},
      {original: deceptionPassWater}
    ];
    return (
      <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}
      />
    );
  }
}

export default MyComponent;