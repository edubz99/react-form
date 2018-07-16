import React, { Component } from 'react';
import Login from './Login'
import Register from './Register'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
        <Route exact strict path="/" component={Login}/>
        <Route exact strict path="/register" component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
