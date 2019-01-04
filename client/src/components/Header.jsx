import React from 'react';

const Header = () => {
  return (
    //Flex the items inside of the container
    //If the span's don't work, try using div's
    //Try having no button for button radio. Then button if needed
    <React.Fragment>
      <div className="carousel-header-nav">
        <span id="carousel-logo"></span>
        <div className="carousel-location-picker">
          <span id="btn-location-radio-icon">Radio Icon</span>
          <span id="location-one-btn">San Francisco Bay Area</span>
          <span id="right-arrow">RIGHT ARROW</span>
          <span id="location-two-btn">San Francisco </span>
          <span id="dropdown-arrow">DROPDOWN ARROW</span>
        </div>
      </div>
      <div className="carousel-location-nav">
        <ol>
          <li>Home</li>
          <li>United States</li>
          <li>San Francisco Bay Area</li>
          <li>San Francisco</li>
          <li>Nob Hill</li>
        </ol>
      </div>
    </React.Fragment>
  )
}

export default Header;

