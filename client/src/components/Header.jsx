import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <div className="carousel-header-nav">
          <span id="carousel-logo"></span>
          <span className="radio-location">
            <span className="fas fa-map-marker-alt" id="map-marker"></span>
            <span id="location-one-btn">SF Bay Area city</span>
            <span className="fas fa-chevron-circle-right" id="arrow-right"></span>
            <span id="location-two-btn">SF Bay Area City</span>
            <span className="fas fa-chevron-circle-down" id="arrow-down"></span>
          </span>
          <span id="filler"></span>
          <span id="signIn-btn-container">
            <button id="sign-up-btn">Sign Up</button>
            <button id="sign-in-btn">Sign in</button>
            <span className="fas fa-search"></span>
          </span>
      </div>
    </React.Fragment>
  )
}

export default Header;
