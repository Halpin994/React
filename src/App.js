
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';

import Results from './Results.js';
import Axios from 'axios';

class MovieList extends React.Component {
  render() {
    return(<div className="App"> { <Results/> } <div id="results"></div></div>);
  }
}

export default MovieList;
