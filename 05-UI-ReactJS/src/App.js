import './App.scss';
import { addMovie, removeMovie, toggleMovie, setVisibilityFilter } from './actions';
import { connect } from 'react-redux'
import { VisibilityFilters } from './filters';
import logo from './logo.svg';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Option from './Option'
import React from 'react';

const { SHOW_ALL } = VisibilityFilters;
const { SHOW_WATCHED } = VisibilityFilters;
const { SHOW_NON_WATCHED } = VisibilityFilters;
let App = React.createClass({

  getListOptionProps: function () {
    return (
      <MovieList filter={this.props.filter} movies={this.props.movies} onMovieRemove={this.props.onMovieRemove}
      onSetVisibilityFilter={this.props.onSetVisibilityFilter} onToggleMovie={this.props.onToggleMovie} />
    )
  },

  getFormOptionProps: function () {
    return (
      <MovieForm movies={this.props.movies} onMovieAdd={this.props.onMovieAdd} />
    )
  },

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
        <Option option={this.getFormOptionProps()}  title="Add a new movie" />
        <Option option={this.getListOptionProps()} title="Watch your list of movies" />
      </div>
    );
  }
})

const getVisibleMovies = (movies, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return movies

    case SHOW_WATCHED:
      return movies.filter(movie => movie.watched)

    case SHOW_NON_WATCHED:
      return movies.filter(movie => !movie.watched)

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
