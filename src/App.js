import React from "react";
import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import "./components/Header/Header.scss";
import data from "./utils/data";
import Sidebar from './components/Sidebar/Sidebar';
import sidebar_data from "./utils/sidebar_data";

class App extends React.Component {
  state = {
    hotels: [],
    recommendedHotels: [],
    sort: true
  };

  filterHotels = name => {
    const filteredHotels = this.state.hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({

      hotels: name.length > 0 ? filteredHotels : data
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
    this.setState({
      hotels: this.sortHotels(),
      recommendedHotels: sidebar_data
    });
  }

  render() {
    return (
      <div className="App">
        {/* <div className="Body"> */}
          <Header filterHotels={this.filterHotels} filterHotelsPrice={this.filterHotelsPrice} />
          <div className="MainSection">
            <Sidebar sidebar_data={this.state.recommendedHotels} />
            <MainContainer data={this.state.hotels} switchSort={this.switchSort} sort={this.state.sort} />
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default App;