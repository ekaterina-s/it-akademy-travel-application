import React from 'react';
import './Header.scss';

class Header extends React.Component {

    state = {};

    handleSearch = event => {
        this.props.filterHotels(event.target.value);
    }

    handleFilterPrice = event => {
        this.props.filterHotelsPrice(event.target.value);
    }

    render() {
        return (
            <div className="header">
                {/* <input type="text" className="search-field-location" placeholder="Enter location" onChange={this.handleSearch} />
                <input type="text" className="search-field-price" placeholder="Min. price" onChange={this.handleFilterPrice} /> */}
            </div>
        );
    }

}

export default Header;