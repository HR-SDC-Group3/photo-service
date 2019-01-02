import React from 'react';
import Modal from './Modal.jsx';
import _ from 'lodash';

/*

------------------------------------- TO-DO ----------------------------------------------------
OpenTable restaurants seem to be making a photo carousel of either 1 restaurant entry
or 10. Therefore, photo entries must be either 1 or 10, to be displayed to the user
Need to conditionally render 1 or 10 photos, depending on what was calculated in the beginning. 
Keep it static on componentDidMount, and don't change the state
------------------------------------------------------------------------------------------------

*/

class RestaurantPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      restaurantHeader: null,
      currentModal: '',
      currentModalIndex: 0,
      headerStyleToDisplay: [0, 10],
    }

    this.closeModal = this.closeModal.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.generateHeaderView = this.generateHeaderView.bind(this);
  }

  //Generates a fixed view based off of the number that was calculated
  componentDidMount() {
    const { headerStyleToDisplay } = this.state
    this.setState({ restaurantHeader: headerStyleToDisplay[this.generateHeaderView()] })
  }

  openModal(index, event) {
    let modalImage = event.target.src;
    modalImage = modalImage.replace('thumbnails', 'large_photos');
    modalImage = modalImage.replace('_small', '_large');

    this.setState({
      showModal: true,
      currentModal: modalImage,
      currentModalIndex: index,
    })
  }

  closeModal() {
    this.setState({
      showModal: false,
      currentModal: '',
      currentModalIndex: 0,
    })
  }

  generateHeaderView() {
    return Math.round(Math.random());
  }

  previous() {
    const { currentModalIndex } = this.state;
    const { photos } = this.props;

    if (currentModalIndex !== 0) {
      this.setState({ currentModalIndex: this.state.currentModalIndex -= 1 })
    } else {
      this.setState({ currentModalIndex: photos.length - 1 })
    }
  }

  next() {
    const { currentModalIndex } = this.state;
    const { photos } = this.props;

    if (currentModalIndex !== photos.length) {
      this.setState({ currentModalIndex: this.state.currentModalIndex += 1 })
    } else {
      this.setState({ currentModalIndex: 0 })
    }
  }

  render() {

    const { photos, isLoading } = this.props
    const { showModal, currentModal, currentModalIndex } = this.state
    const numberToString = {
      0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
      6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
    }

    if (isLoading) {
      return (
        <div className="carousel-container-grid">
          {photos.map((restaurant) => {
            const photosToBeDisplayed = restaurant.userPhotos.slice(0, 14);
            return photosToBeDisplayed.map((photo, index) => {
              // For every odd element, make two divs to store sto photos
              if (index % 2 !== 0) {
                //make two divs
                return (
                  <div>
                    <div id={numberToString[index]}><li><img src={photo.photoThumbnail} key={index} onClick={this.openModal.bind(this, index)}></img></li></div>
                    <div id={numberToString[index + 1]}><li><img src={photo.photoThumbnail} key={index + 1} onClick={this.openModal.bind(this, index + 1)}></img></li></div>
                  </div>
                )
              } else {
                //make one div
                <div id={numberToString[index]}><li><img src={photo.photoThumbnail} key={index} onClick={this.openModal.bind(this, index)}></img></li></div>
              }
            })
          })}
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }

    //   if (isLoading) {
    //     return (
    //       <div className="carousel-container-grid">
    //         {photos.map((restaurant) => {
    //           const photosToBeDisplayed = restaurant.userPhotos.slice(0, 14);
    //           return photosToBeDisplayed.map((photo, index) => {
    //             return (
    //               <li id={numberToString[index]}>
    //                 {/* <div className="carousel-image"> */}
    //                 <img src={photo.photoThumbnail}
    //                   key={index}
    //                   onClick={this.openModal.bind(this, index)}></img>
    //                 {/* </div> */}
    //               </li>
    //             )
    //           });
    //         })}
    //         {showModal ? <Modal onClose={this.closeModal}
    //           modalImage={currentModal}
    //           photos={photos}
    //           currentModalIndex={currentModalIndex}
    //           onPrevious={this.previous}
    //           onNext={this.next} /> : null}
    //       </div>
    //     )
    //   } else {
    //     return <h1>Loading...</h1>
    //   }
    // }}
  }
}

export default RestaurantPhotos;
