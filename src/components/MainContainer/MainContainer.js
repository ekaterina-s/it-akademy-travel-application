import React from "react";
import "./MainContainer.scss";


 const MainContainer = (props) => {

    return (
      <div className="main-container">
        {props.data.map(element => {
          return (
            <div className="hotel">
            <div className="tools" style={{width: '100%'}}>
            <input type="button" value={props.sort ? 'A-Z' : 'Z-A'} onClick={props.switchSort} />
            </div>
              <img src={element.image} />
              <div className="hotel__info">
                <span className="hotel-name">{element.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

export default MainContainer;