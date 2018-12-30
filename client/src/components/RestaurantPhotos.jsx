import React from 'react';
import Modal from './Modal.jsx';

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentModal: '',
      amountToRender: this.getRandomNumber(),
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // toggleModal should bring up a modal window with the Modal that was clicked on being the 
  // centerpiece

  openModal(event) {
    const modalImage = event.target.src;

    this.setState(prevState => ({
      showModal: true,
      currentModal: modalImage
    }))
  }

  closeModal() {
    this.setState(prevState => ({
      showModal: false
    }))
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  render() {
    // OpenTable restaurants seem to be making a randomly generated photo mosaic per restaurant entry
    // Therefore, restaurant carousel photo entries must be randomly generated per restaurant
    // Everytime we render, we slice off a portion of the userPhotos to render, and randomly send to 
    // display in the header
    // const amountToRender = this.getRandomNumber();
    const { photos, isLoading } = this.props
    const { showModal, currentModal, amountToRender } = this.state

    if (isLoading) {
      return (
        <div>
          {photos.map((restaurant, index) => {
            const photosToBeDisplayed = restaurant.userPhotos.slice(0, amountToRender);
            return photosToBeDisplayed.map((photo, index) => {
              return (
                <li><img src={photo.photoURL} key={index} onClick={this.openModal}></img></li>
              )
            })
          })}
          {this.state.showModal ? <Modal onClose={this.closeModal} modalImage={this.state.currentModal} /> : null}
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default RestaurantPhotos;