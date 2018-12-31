import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root')

//Current props being sent down
//modalImage = current modal image
//photoArray = Saratoga's photo array
//modalIndex = index of the modal
//length = get the length of the photoArray

class Modal extends React.Component {
  constructor(props) {
    super(props)
  }

  el = document.createElement('div');

  //Mount portal entry
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    const { modalImage, onClose, photos, onNext, onPrevious } = this.props;

    return ReactDOM.createPortal(
      <div id="carousel-modal-bg">
        {/* <button>Previous</button>
        // <button>Next</button> */}
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
        <div id="carousel-modal-style">
          <img src={modalImage}></img>
          <button onClick={onClose}>Close</button>
        </div>
      </div>,
      this.el
    )

    //Don't need to map over the entire array, just take in the modal and the index passed in from the parent. 
    // return ReactDOM.createPortal(
    //   <div id="carousel-modal-bg">
    //     <div id="carousel-modal-style">
    //       {photos.map((restaurant) => {
    //         return restaurant.userPhotos.map((photo, index) => {
    //           const parsedDate = photo.date.split(' ').slice(0, 4).join(' ');
    //           return (
    //             // Need to pass in the index of the modalImage that was clicked on here. 
    //             // From there, we load the array and set the pointer to that image that was clicked on
    //             // Left button and right button can scroll through the photos
    //             <div id="modal-scroller">
    //               <li>
    //                 <div id="carousel-modal"><img src={photo.photoURL} key={index}></img></div>
    //                 <div id="carousel-description">{photo.photo_description}</div>
    //                 <div id="carousel-date">{parsedDate}</div>
    //                 <div id="carousel-user">{photo.username}</div>
    //               </li>
    //               <button onClick={onClose}>Close</button>
    //             </div>
    //           )
    //         })
    //       })}
    //     </div>
    //   </div>,
    //   this.el
    // )
  }
}

export default Modal;