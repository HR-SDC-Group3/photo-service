import React from 'react';

const Header = () => {
  return (
    <div className="carousel-header">
      <div>
        <div id="carousel-logo"></div>
        <div id="carousel-location-picker">
          <button id="btn-location-one">San Francisco</button>
          <button id="btn-location-radio"></button>
          <button id="btn-location-one">San Francisco Area</button>
        </div>
        <button id="sign-up-btn">Sign up</button>
        <button id="sign-in-btn">Sign in</button>
        <button id="search-btn">&#128269;</button>
      </div>
      <div id="carousel-location">
        <ol>
          <li>Home</li>
          <li>United States</li>
          <li>San Francisco Bay Area</li>
          <li>San Francisco</li>
          <li>Nob Hill</li>
        </ol>
      </div>
    </div>
  )
}

export default Header;

