import React, { Component } from 'react';
import Movie from './Movies';
import Search from './Search';


class MoviesMiddle extends Component {
  render() {
    return (
      <div className="container mt-3">
        
        <Search />
        <Movie />

      </div>
    );
  }
}

export default MoviesMiddle;
