import React, { Component } from 'react';
import Home from './components/pages/home.js';
import Projects from './components/pages/projects'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/projects'  component={Projects} />
      </Router>
    )
    
  }
}
export default App;
