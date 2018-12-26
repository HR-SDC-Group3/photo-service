import React from 'react';

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
