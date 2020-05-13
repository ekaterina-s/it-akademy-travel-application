import React from "react";
import "./MainContainer.scss";
import { Link } from 'react-router-dom'
import HotelView from "../../views/HotelView/HotelView";
import preloader from "../../icons/preloader.svg";

const MainContainer = (props) => {

  return (
    props.data.length > 0 ?
      <div className="main-container">
        {props.data.map((element) => {
          return (
            <div className="hotel" >
              {/* <div className="tools" style={{width: '100%'}}> */}
              {/* <input type="button" value={props.sort ? 'A-Z' : 'Z-A'} onClick={props.switchSort} /> */}
              {/* </div> */}
              <img src={element.image} />
              <div className="hotel-info" key={element.id}>
                <Link to={"hotel/" + element.id}>
                  <div className="hotel-name">{element.title}</div>
                </Link>
                <div className="hotel-location-price">
                  <div>{element.location}</div>
                  <span className="price-container"><div>{element.price}{props.symbol}</div></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      : <div className="d-flex justify-content-center mx-auto align-items-start">
        <img src={preloader} />
      </div>
  );
}

export default MainContainer;