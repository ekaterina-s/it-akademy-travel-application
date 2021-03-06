import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import HotelView from './views/HotelView/HotelView';
import './App.scss';
import LoginView from './views/LoginView/LoginView';
import AddHotelView from './views/AddHotelView/AddHotelView';
import RegisterView from './views/RegisterView/RegisterView';
import TopBar from "./components/TopBar/TopBar";
import axios from 'axios';
import { url } from './utils/api';
import PrivateRoute from './PrivateRoute';
import ContactUsView from './views/ContactUsView/ContactUsView';
import UserHotelsView from './views/UserHotelsView/UserHotelsView';
import FavouriteView from './views/FavouriteView/FavouriteView';
import Notification from './components/Notification/Notification';
import { getHotels } from './store/actions/hotels-action';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    user: null,
    isAuthorized: false,
    hotels: []
  };

  verifyUserStatus = () => {
    const token = localStorage.getItem('token');

    const options = {
      headers: {
        'x-access-token': token,
      },
    };

    if (token && token.length > 0) {
      axios.get(`${url}/users/me`, options)
        .then(response => {
          this.setState({
            user: response.data,
            isAuthorized: true
          })
          console.log(this.state.user);
          console.log(this.state.isAuthorized);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({
        user: null,
        isAuthorized: false
      })
    }
  };

  componentDidMount() {
    this.verifyUserStatus();
    this.props.getHotels();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Notification />
          <TopBar
            isAuthorized={this.state.isAuthorized}
            user={this.state.user}
            verifyUserStatus={this.verifyUserStatus}
          />
          <Switch>
            <PrivateRoute
              path="/add-hotel"
              component={AddHotelView}
              isAuthorized={this.state.isAuthorized}
            />
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/hotel/:id" component={HotelView} />
            <Route path="/contact-us" component={ContactUsView} />
            <PrivateRoute
              path="/my-hotels"
              component={UserHotelsView}
              isAuthorized={this.state.isAuthorized}
            />
            <Route path="/favourite" component={FavouriteView} />
            <Route path="/" component={HomeView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels
})

const mapDispatchToProps = (dispatch) => ({
  getHotels: (hotels) => dispatch(getHotels())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);