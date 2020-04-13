import React from "react";
import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import "./components/Header/Header.scss";
import data from "./utils/data";
import Sidebar from './components/Sidebar/Sidebar';
import sidebar_data from "./utils/sidebar_data";
import rates from "./utils/rates";
import axios from 'axios';

class App extends React.Component {
  state = {
    hotels: [],
    recommendedHotels: [],
    sort: true,
    currency: 'USD',
    dataFromApi: null,
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
    const filteredHotels = data.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({

      hotels: name.length > 0 ? filteredHotels : data,
    });
  };

  filterHotelsPrice = price => {
    const filteredHotels = data.filter(hotel => {
      return hotel.price >= parseInt(price);
    })
    this.setState({
      hotels: price.length > 0 ? filteredHotels : data
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

    return data.sort((a, b) => {
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
    // axios.get('https://nodejs-mysql-it-academy.herokuapp.com/hotels').then((res) => {
    //   this.setState({
    //     dataFromApi: res.data
    //   })
    this.switchSort();
    // })



    this.setState({
      //hotels: this.sortHotels(),
      recommendedHotels: sidebar_data
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currency !== this.state.currency) {
      const dataCopy = JSON.parse(JSON.stringify(data));
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
      <div className="App">
        <Header
          filterHotels={this.filterHotels}
          filterHotelsPrice={this.filterHotelsPrice}
          convertPrice={this.convertPrice}
        />
        <div className="MainSection">
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

export default App;