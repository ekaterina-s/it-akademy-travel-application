import React from 'react';
import heartEmpty from '../../icons/heartEmpty.svg';
import heartFilled from '../../icons/heartFilled.svg';
import { connect } from 'react-redux';
import { addToFavourites } from '../../store/actions/hotels-action';
import './LikeButton.scss';

class LikeButton extends React.Component {
    handleClick = () => {
        const { hotel, addToFavourites } = this.props;

        addToFavourites(hotel);
    }

    isFav = (hotelId) => {
        return this.props.favourites.find((hotel) => {
            return hotel.id === hotelId;
        })
    }

    render() {
        const { hotel } = this.props;

        return (<div className="fav-button" onClick={this.handleClick}>
            <img 
            className="fav-icon" 
            src={this.isFav(hotel.id) ? heartFilled : heartEmpty} 
            alt=""     
            />
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    favourites: state.favourites
})

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (hotel) => dispatch(addToFavourites(hotel))
})

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);