import { connect } from 'react-redux'
import React from 'react';
import Option from './Option'
import logo from './logo.svg';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import { addMovie, removeMovie, toggleMovie, setVisibilityFilter } from './actions';

let App = React.createClass({

  render: function () {
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
          <Option title="Add a new movie" option={<MovieForm movies={this.props.movies} onMovieAdd={this.props.onMovieAdd} />} />
          <Option title="Watch your list of movies" option={<MovieList movies={this.props.movies} onMovieRemove={this.props.onMovieRemove}
          index={this.index} onSetVisibilityFilter={this.props.onSetVisibilityFilter} onToggleMovie={this.props.onToggleMovie} />} />
        </div>
      </div>
    );
  }
})

const getVisibleMovies = (movies, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return movies

    case 'SHOW_WATCHED':
      return movies.filter(m => m.watched)

    case 'SHOW_NON_WATCHED':
      return movies.filter(m => !m.watched)

    default:
      return movies
  }
}

const mapStateToProps = function (state) {
  console.log(state.movies);
  return {
    movies: getVisibleMovies(state.movies, state.visibilityFilter)
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    onMovieClick: (id) =>
      dispatch(toggleMovie(id)),

    onMovieAdd: (movie) =>
      dispatch(addMovie(movie)),

    onMovieRemove: (index) =>
      dispatch(removeMovie(index)),

      onSetVisibilityFilter: (filter) =>
        dispatch(setVisibilityFilter(filter)),

      onToggleMovie: (index) =>
        dispatch(toggleMovie(index))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
