import React from 'react';
import './Header.scss';
import search from '../../icons/search.svg';

class Header extends React.Component {

    state = {};
    handleCurrency = event => {
        this.props.convertPrice(event.target.value);
    }
    handleSearch = event => {
        this.props.filterHotels(event.target.value);
    }

    handleFilterPrice = event => {
        this.props.filterHotelsPrice(event.target.value);
    }

    render() {
        return (
            <div className="header">
                <div>
                    <img src={search} />
                    <input type="text"
                        className="search-field-location"
                        placeholder="Enter location"
                        onChange={this.handleSearch} />
                </div>
                <div className="price-currency-change">
                    <div className="price-bar">
                        &#128176;
                <input type="text"
                            className="search-field-price"
                            placeholder="Min. price"
                            onChange={this.handleFilterPrice} />
                $
            </div>
                    <select className="price-bar-currency" onChange={this.handleCurrency}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="PLN">PLN</option>
                        <option value="CHF">CHF</option>
                    </select>
                </div>
            </div>
        );
    }

}

export default Header;