import React from "react";
import "./HomeView.scss";
import MainContainer from "../../components/MainContainer/MainContainer";
import Header from "../../components/Header/Header";
import sidebar_data from "../../utils/sidebar_data";
import Sidebar from "../../components/Sidebar/Sidebar";
import rates from "../../utils/rates";
import axios from 'axios';
import { connect } from 'react-redux';
import { saveHotels } from '../../store/actions/hotels-action';

class HomeView extends React.Component {
  state = {
    hotels: [],
    recommendedHotels: [],
    sort: true,
    currency: 'USD',
    dataFromApi: [],
    symbol: '$'
  };

  convertPrice = value => {
    let x;
    switch (value) {
      case 'USD': x = '$'; break;
      case 'EUR': x = '€'; break;
      case 'PLN': x = 'zl'; break;
      case 'CHF': x = '₣'; break;

      default: x = '$'
    }

    this.setState({
      currency: value,
      symbol: x
    })
  }

  filterHotels = name => {
    const filteredHotels = this.state.dataFromApi.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({

      hotels: name.length > 0 ? filteredHotels : this.state.dataFromApi,
    });
  };

  filterHotelsPrice = price => {
    const filteredHotels = this.state.dataFromApi.filter(hotel => {
      return hotel.price >= parseInt(price);
    })
    this.setState({
      hotels: price.length > 0 ? filteredHotels : this.state.dataFromApi
    });
  }

  sortHotels = () => {
    let aMoreB;
    let bMoreA;

    if (this.state.sort) {
      aMoreB = 1;
      bMoreA = -1;
    } else {
      aMoreB = -1;
      bMoreA = 1;
    }

    return this.state.dataFromApi.sort((a, b) => {
      if (a.title > b.title) {
        return aMoreB;
      } else if (b.title > a.title) {
        return bMoreA;
      } else {
        return 0;
      }
    })
  }

  switchSort = () => {
    this.setState({
      sort: !this.state.sort,
      hotels: this.sortHotels()
    });
  }

  componentDidMount() {
    axios.get('https://nodejs-mysql-it-academy.herokuapp.com/hotels').then((res) => {
      this.setState({
        dataFromApi: res.data,
      });
    this.switchSort();
    });

    axios.get('https://nodejs-mysql-it-academy.herokuapp.com/hotels/recommended').then((res) => {
      this.setState({
        recommendedHotels: res.data
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currency !== this.state.currency) {
      const dataCopy = JSON.parse(JSON.stringify(this.state.dataFromApi));
      const newHotels = dataCopy.map(hotel => {
        hotel.price = Math.ceil(hotel.price * rates[this.state.currency])
        return hotel;
      });
      this.setState({
        hotels: newHotels
      })
    }
  }

  render() {
    return (
      <div className="AppH">
        <Header
          filterHotels={this.filterHotels}
          filterHotelsPrice={this.filterHotelsPrice}
          convertPrice={this.convertPrice}
        />
        <div className="MainSectionH">
          <Sidebar
            sidebar_data={this.state.recommendedHotels}
          />
          <MainContainer
            data={this.state.hotels}
            switchSort={this.switchSort}
            sort={this.state.sort}
            symbol={this.state.symbol}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
hotels: state.hotels
})

const mapDispatchToProps = (dipatch) => ({
  saveHotelsToRedux: (hotels) => dispatchEvent(saveHotels(hotels))
})

export default connect(mapStateToProps)(HomeView);