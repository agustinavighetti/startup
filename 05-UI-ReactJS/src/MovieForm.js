import classNames from 'classnames';
import React from 'react';
import MovieItem from './MovieItem.js';

const MovieForm = React.createClass({

  getInitialState: function() {
    return {
      name:'',
      year: '',
      duration: '',
      watched: '',
      id: this.props.movies.length
    }
  },

  click: function() {

    if ((this.state.name === '') || (this.state.year === '') || (this.state.duration === '')) {
      alert('You have to fill in all the items!');
    } else if (this.state.watched === '') {
      alert('You have to indicate if you have seen this movie!')
    } else {
      this.setState({
        id: (this.props.movies.length + 1)
      });
      this.props.onMovieAdd(this.state);

      this.setState({
        name: '',
        year: '',
        duration: '',
        watched: ''
      });
    }
  },

  render() {
    return (
      <div className="option-box">
        <MovieItem value={this.state.name} onChange={this.handleInputChange.bind(this, 'name')} item="Movie's name: " type="text" />
        <MovieItem value={this.state.year} onChange={this.handleInputChange.bind(this, 'year')} item="Movie's year: " type="number" />
        <MovieItem value={this.state.duration} onChange={this.handleInputChange.bind(this, 'duration')} item="Movie's duration (in minutes): " type="number" />
        <button className={this.getButtonClass(true)} onClick={this.watched}>Watched</button>
        <button className={this.getButtonClass(false)} onClick={this.notWatched}>Not watched</button>
        <button className="App-button" type="submit" onClick={this.click}>
          Submit
          </button>
      </div>
    );
  },

  getButtonClass: function (watchedButton) {
    if (watchedButton) {
      return classNames(
        'App-button--option',
        'App-button--watched',
          {
          'App-button--notwatched': false,
          'App-button--watched--selected': (this.state.watched === watchedButton)
        }
      );
    } else {
      return classNames(
        'App-button--option',
        'App-button--notwatched',
          {
          'App-button--watched': false,
          'App-button--notwatched--selected': (this.state.watched === watchedButton)
        }
      );
    }
  },

  handleInputChange: function (field, event) {

    var newState = this.state;

    newState[field] = event.target.value;

    this.setState(newState);
  },

  watched: function() {
    this.setState({watched: true});
  },

  notWatched: function() {
    this.setState({watched: false});
  }
});

export default MovieForm;
