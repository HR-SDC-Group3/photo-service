import React from 'react';
import Modal from './Modal.jsx';
import _ from 'lodash';

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentModal: '',
      headerStyleToDisplay: [0, 10],
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.generateHeaderView = this.generateHeaderView.bind(this);
    this.generateRandomIndex = this.generateRandomIndex.bind(this);
  }

  // toggleModal should bring up a modal window with the Modal that was clicked on being the 
  // centerpiece

  openModal(event) {
    let modalImage = event.target.src;
    modalImage = modalImage.replace('thumbnails', 'large_photos');
    modalImage = modalImage.replace('_small', '_large');

    this.setState(prevState => ({
      showModal: true,
      currentModal: modalImage
    }))

  }

  closeModal() {
    this.setState(prevState => ({
      showModal: false,
      currentModal: ''
    }))
  }

  generateHeaderView() {
    return Math.round(Math.random());
  }

  generateRandomIndex() {
    return Math.round(Math.random() * 22 + 1)
  }

  render() {
    // OpenTable restaurants seem to be making a photo carousel of either 1 restaurant entry
    // or 10. Therefore, photo entries must be either 1 or 10, to be displayed to the user

    const { photos, isLoading } = this.props
    const { showModal, currentModal, headerStyleToDisplay } = this.state
    const numberToString = {
      0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
      6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
    }

    if (isLoading) {
      return (
        <div>
          {photos.map((restaurant, index) => {
            const photosToBeDisplayed = restaurant.userPhotos.slice(0, 10);
            return photosToBeDisplayed.map((photo, index) => {
              return (
                <li id={numberToString[index]}><img src={photo.photoThumbnail} key={index} onClick={this.openModal}></img></li>
              )
            })
          })}
          {showModal ? <Modal onClose={this.closeModal} modalImage={currentModal} photos={photos} /> : null}
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }

}

export default RestaurantPhotos;

// /*
// Current bug is whenever I click on the close button, my entire page gets re-rendered 
// and all of the re-runs again. 

// When the unit closes, it must revert back to it's current state. 


// For styling, what if I just made a bunch of divs and then styled each div to contain 

// */

