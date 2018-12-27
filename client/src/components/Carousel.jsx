import React from 'react';
import Axios from 'axios';
import url from 'url';
import RestaurantPhotos from './RestaurantPhotos.jsx';
import sampleArray from './sampledata.js';

//Carousel is only concerned with rendering the RestaurantPhotos array
//Carousel will grab the restaurant ID, and submit a request to Mongo to get all photos associated w/ that restaurant
//Carousel will then pass down the array to restaurants to render
class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantPhotos: sampleArray,
    }
  }

  render() {
    return (
      <div className="carousel-container" >
        <div className="carousel-image-container">
          <RestaurantPhotos photos={this.state.restaurantPhotos} />
        </div>
      </div >
    )
  }
}

export default Carousel;

//   return(
//   <div className = "App" >
//       <input type="button"
//         onClick={this.showModal}
//         value="Show Modal" />

//       <Modal show={this.state.isOpen} onClose={this.showModal}>
//         <RestaurantPhotos photos={this.state.userPhotos} />
//       </Modal>


//   </div>
// )
// }