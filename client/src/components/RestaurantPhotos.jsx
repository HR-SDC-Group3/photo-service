import React from 'react';

//Restaurant photos should take in an array of photos, a click handler to take care of closing/opening. 

const RestaurantPhotos = (props) => {
  let photos = props.photos.map((object, index) => {
    return (
      <li>
        <img src={object.photoURL} key={index} onClick={props.onClick}></img>
      </li>
    )
  })

  return props.show ? <div onClick={props.onClick}>{photos}</div> : <h1 onClick={props.onClick}>Hello Falsey</h1>
}

export default RestaurantPhotos;
