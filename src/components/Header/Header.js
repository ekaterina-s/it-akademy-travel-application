import React from 'react';
import './Header.scss';
import search from '../../icons/search.svg';
import { connect } from 'react-redux';
import { saveText } from '../../store/actions/hotels-action';

class Header extends React.Component {

    state = {};
    inputRef = React.createRef();

    handleCurrency = event => {
        this.props.convertPrice(event.target.value);
    };
    handleSearch = event => {
        this.props.filterHotels(event.target.value);
    };

    handleFilterPrice = event => {
        this.props.filterHotelsPrice(event.target.value);
    };

    handleClick = () => {
        this.props.dispatch(saveText('New text is here!'));
    };

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div className="header">
                <div>
                    <img src={search} alt="search" />
                    <input type="text"
                        className="search-field-location"
                        placeholder="Enter location"
                        onChange={this.handleSearch}
                        ref={this.inputRef}
                    />
                </div>
                <div className="price-currency-change">
                    <div className="price-bar">
                        <span role="img" aria-label="emoji">&#128176;</span>
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

                <input type="button" value="click" onClick={this.handleClick} />
                {this.props.savedText}
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        savedText: state.text,
    };
};

export default connect(mapStateToProps)(Header);