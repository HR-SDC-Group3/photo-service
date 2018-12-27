import React from 'react';

const Modal = (props) => {

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.05)',
    padding: 50,
    zIndex: 1000,
  }

  const imageStyle = {
    textAlign: 'center',
  }

  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 500,
    margin: '0 auto',
    padding: 30,
    position: 'relative',
  }

  const footerStyle = {
    position: 'absolute',
    bottom: 20,
  }

  return (
    props.userPhotos.map((userPhoto) => {
      return (
        <div style={backdropStyle}>
          <div style={modalStyle}>
            <button onClick={props.onClick}>Close</button>
            <img src={userPhoto.photoURL} style={imageStyle} id="carousel-modal"></img>
            <div style={footerStyle}>
              <span className="carousel-description">{userPhoto.description}</span>
              <span className="carousel-username">{userPhoto.username}</span>
              <span className="carousel-date">{userPhoto.date}</span>
              <button onClick={props.onClick}>Previous</button>
              <button onClick={props.onClick}>Next</button>
            </div>
          </div>
        </div>
      )
    })
  )

  // return (
  //   <div style={backdropStyle}>
  //         <div style={modalStyle}>
  //           <img src={userPhoto.photoURL} style={imageStyle}></img>
  //           <div style={footerStyle}>
  //             <span className="carousel-description">{userPhoto.description}</span>
  //             <span className="carousel-username">{userPhoto.username}</span>
  //             <span className="carousel-date">{userPhoto.date}</span>
  //             <button onClick={props.onClick}>Close</button>
  //           </div>
  //         </div>
  //       </div>
  // )
}

export default Modal;