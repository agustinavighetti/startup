import React from 'react';
import MovieItem from './MovieItem.js';

const MovieForm = React.createClass({

  getInitialState: function() {
    return {
      name:'',
      year: '',
      duration: '',
      movies: this.props.movies
    }
  },

  click: function() {
    var moviesObject;

    console.log(this.state.name);

    if ((this.state.name === '') || (this.state.year === '') || (this.state.duration === '')) {
      alert('You have to fill in all the items!');
    } else {
      moviesObject = JSON.parse(localStorage.getItem('movies')) || [];
      moviesObject.push(this.state);
      localStorage.setItem('movies', JSON.stringify(moviesObject));
      this.setState({name: '',
                     year: '',
                     duration: ''})
    }
  },

  render() {
    return (
      <div className="option-box">
        <MovieItem value={this.state.name} onChange={this.handleInputChange.bind(this, 'name')} item="Movie's name: " type="text" />
        <MovieItem value={this.state.year} onChange={this.handleInputChange.bind(this, 'year')} item="Movie's year: " type="number" />
        <MovieItem value={this.state.duration} onChange={this.handleInputChange.bind(this, 'duration')} item="Movie's duration (in minutes): " type="number" />
        <div>
          <button className="App-button" type="submit" onClick={this.click}>
            Submit
          </button>
        </div>
      </div>
    );
  },

  handleInputChange: function (field, event) {

    var newState = this.state;

    newState[field] = event.target.value;

    this.setState(newState)
  }
});

export default MovieForm;
