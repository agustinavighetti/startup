import React, { Component } from 'react';
import Option from './Option'
import logo from './logo.svg';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to your movies library</h2>
          </div>
          <p className="App-intro">
            Here you can save all the movies you like!
          </p>
          <Option title="Add a new movie" option={<MovieForm />} />
          <Option title="Watch your list of movies" option={<MovieList />} />
        </div>
      </div>
    );
  }
}

export default App;
