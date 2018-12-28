import React from 'react';
import Modal from './Modal.jsx';

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  //Have a condition to show something if restaurantPhotos = null
  //Need to have a double map

  render() {
    if (this.props.isLoading) {
      return (
        <div>
          {this.props.photos.map((restaurant, index) => {
            return restaurant.userPhotos.map((photo, index) => {
              return (
                <li><img src={photo.photoURL} key={index} onClick={this.toggleModal}></img></li>
              )
            })
          })}
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

export default RestaurantPhotos;