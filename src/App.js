import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import HotelView from './views/HotelView/HotelView';
import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div>
      <Router>
      <Switch>
      <Route path="/hotel/:id" component={HotelView} />
        <Route path="/" component={HomeView} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;