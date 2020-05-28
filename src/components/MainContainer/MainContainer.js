import React from "react";
import "./MainContainer.scss";
import preloader from "../../icons/preloader.svg";
import Hotel from "../Hotel/Hotel";

const MainContainer = (props) => {

  return (
    props.data.length > 0 ?
      <div className="main-container">
        {props.data.map((element) => {
          return (
            Hotel(element, props)

          );
        })}
      </div>
      : <div className="d-flex justify-content-center mx-auto align-items-start">
        <img src={preloader} alt="preloader"/>
      </div>
  );
}

export default MainContainer;