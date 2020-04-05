import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './Sidebar.scss';
import sidebar_data from '../../utils/sidebar_data';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <p className="title">More than just hotels</p>
        {this.props.sidebar_data.map(element => {
          return (
            <div className="hotel_container">
              <img src={element.image} />
              <div className="hotel_container__info_container">
                <p className="hotel_title">{element.title}</p>
                <p className="location">{element.location}</p>
                <div className="price">{element.price}$</div>
              </div>
              <div className="more d-flex align-items-center">&#8250;</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;