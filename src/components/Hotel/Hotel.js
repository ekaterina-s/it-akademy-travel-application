import React from 'react';
import { Link } from 'react-router-dom';
import './Hotel.scss';
import LikeButton from '../LikeButton/LikeButton';


const Hotel = (element, props) => {
  return (
    <div className="hotel" >
      <img src={element.image} alt="hotel_image"/>
      <div className="hotel-info" key={element.id}>
        <Link to={"hotel/" + element.id}>
          <div className="hotel-name">{element.title}</div>
        </Link>
        <div className="hotel-location-price">
          <div>{element.location}</div>
          <span className="price-container"><div>{element.price}{props.symbol}</div></span>

          <LikeButton hotel={element} />
        </div>
      </div>
    </div>
  )
}

export default Hotel;