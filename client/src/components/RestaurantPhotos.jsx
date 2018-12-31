import React from 'react';
import Modal from './Modal.jsx';
import _ from 'lodash';

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentModal: '',
      currentModalIndex: null,
      headerStyleToDisplay: [0, 10], //Run a random check in the beginning, set value to currentRestHeader
      // currentRestaurantHeader: //fixed value
    }
    // this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    // this.generateHeaderView = this.generateHeaderView.bind(this);
    // this.generateRandomIndex = this.generateRandomIndex.bind(this);
  }

  //Explore componentdidmount to set curr restaurant header to 0 or 10. 

  //Grabs photo that was clicked and set's it as main modal. 
  openModal(index, event) {
    let modalImage = event.target.src;
    modalImage = modalImage.replace('thumbnails', 'large_photos');
    modalImage = modalImage.replace('_small', '_large');

    // this.setState(prevState => ({
    //   showModal: true,
    //   currentModal: modalImage,
    //   currentModalIndex: index,
    // }))
    this.setState({
      showModal: true,
      currentModal: modalImage,
      currentModalIndex: index,
    })
  }

  closeModal() {
    // this.setState(prevState => ({
    //   showModal: false,
    //   currentModal: '',
    //   currentModalIndex: 0,
    // }))
    this.setState({
      showModal: false,
      currentModal: '',
      currentModalIndex: 0,
    })

  }

  previous() {
    // //If the current index is not 0, decrement the currentArray
    // //If it is zero, change index to be last element of array
    // const { currentModalIndex } = this.state

    if (currentModalIndex !== 0) {
      currentModalIndex--;
      this.setState({ currentModalIndex })
    } else {
      this.setState({ currentModalIndex: photoLength })
    }
  }

  next() {
    //Check if the current index is not at the end of the array
    //If it's at the end, next index should be 0
    //If it's not at the end, increment index
    // const { currentModalIndex } = this.state

    if (currentModalIndex !== photoLength) {
      currentModalIndex++;
      this.setState({ currentModalIndex })
    } else {
      this.setState({ currentModalIndex: 0 })
    }
  }

  // generateHeaderView() {
  //   return Math.round(Math.random());
  // }

  // generateRandomIndex() {
  //   return Math.round(Math.random() * 22 + 1)
  // }

  render() {
    // OpenTable restaurants seem to be making a photo carousel of either 1 restaurant entry
    // or 10. Therefore, photo entries must be either 1 or 10, to be displayed to the user
    const { photos, isLoading } = this.props
    const { showModal, currentModal } = this.state
    const numberToString = {
      0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
      6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
    }

    //Need to conditionally render 1 or 10 photos, depending on what was calculated in the beginning. 
    //Keep it static on componentDidMount, and don't change the state
    if (isLoading) {
      return (
        <div>
          {photos.map((restaurant, index) => {
            const photosToBeDisplayed = restaurant.userPhotos.slice(0, 10);
            return photosToBeDisplayed.map((photo, index) => {
              return (
                <li id={numberToString[index]}>
                  <img src={photo.photoThumbnail}
                    key={index}
                    onClick={this.openModal.bind(this, index)}></img>
                </li>
              )
            });
          })}
          {showModal ? <Modal onClose={this.closeModal}
            modalImage={currentModal}
            photos={photos}
            // currentModalIndex={currentModalIndex}
            onPrevious={this.previous}
            onNext={this.next} /> : null}
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default RestaurantPhotos;