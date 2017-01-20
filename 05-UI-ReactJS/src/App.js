import { connect } from 'react-redux'
import React from 'react';
import './App.scss';
import Option from './Option'
import logo from './logo.svg';
// import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import { addMovie, removeMovie, toggleMovie, setVisibilityFilter } from './actions';

let App = React.createClass({

  render: function () {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="header--logo" alt="logo" />
          <h2>Welcome to your movies library</h2>
        </div>
        <p className="App--intro">
          Here you can save all the movies you like!
        </p>
        <Option title="Add a new movie" option={<MovieForm movies={this.props.movies} onMovieAdd={this.props.onMovieAdd} />} />
        <Option title="Watch your list of movies" option={<MovieList filter={this.props.filter} movies={this.props.movies} onMovieRemove={this.props.onMovieRemove}
        onSetVisibilityFilter={this.props.onSetVisibilityFilter} onToggleMovie={this.props.onToggleMovie} />} />
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
  return {
    filter: state.visibilityFilter,
    movies: getVisibleMovies(state.movies, state.visibilityFilter)
  }
}

const mapDispatchToProps = function (dispatch) {
  return {

    onMovieAdd: (movie) =>
      dispatch(addMovie(movie)),

    onMovieRemove: (id) =>
      dispatch(removeMovie(id)),

    onSetVisibilityFilter: (filter) =>
      dispatch(setVisibilityFilter(filter)),

    onToggleMovie: (id) =>
      dispatch(toggleMovie(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
