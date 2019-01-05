import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      <div className="carousel-header-nav">
        <table>
          <tr id="carousel-logo"></tr>
          <tr className="radio-location">
            <i class="fas fa-map-marker-alt" id="map-marker"></i>
            <span id="location-one-btn">SF Bay Area city</span>
            <i class="fas fa-chevron-circle-right" id="arrow-right"></i>
            <span id="location-two-btn">SF Bay Area City</span>
            <i class="fas fa-chevron-circle-down" id="arrow-down"></i>
          </tr>
          <tr id="filler"></tr>
          <tr id="signIn-btn-container">
            <button id="sign-up-btn">Sign Up</button>
            <button id="sign-in-btn">Sign in</button>
            <i class="fas fa-search"></i>
          </tr>
        </table>
      </div>
    </React.Fragment>
  )
}

export default Header;
