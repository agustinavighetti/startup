import './Option.scss'
import './MovieList.scss';
import { VisibilityFilters } from './filters';
import Button from './Button';
import classNames from 'classnames';
import ListItem from './ListItem';
import React from 'react';

const { SHOW_ALL } = VisibilityFilters;
const { SHOW_WATCHED } = VisibilityFilters;
const { SHOW_NON_WATCHED } = VisibilityFilters;

const MovieList = React.createClass({

  propTypes: {
    filter: React.PropTypes.string,
    movies: React.PropTypes.arrayOf(React.PropTypes.shape({
      duration: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      watched: React.PropTypes.bool.isRequired,
      year: React.PropTypes.string.isRequired
    }).isRequired).isRequired,
    onMovieRemove: React.PropTypes.func,
    onSetVisibilityFilter: React.PropTypes.func,
    onToggleMovie: React.PropTypes.func
  },

  showList: function () {
    var movies = this.props.movies;

    if (movies.length !== 0) {
      return (
        <div>
          {this.renderList()}
        </div>
      );
    } else {
      return (
        <div className="Option--content MovieList--noMovie">
          <h1>No hay pelis</h1>
        </div>
      );
    }
  },

  watchedLabel: function(watched) {
    if (watched) {
      return <label className="ListItem--label">You have already watched this movie</label>
    } else {
      return <label className="ListItem--label">You have not watched this movie yet</label>
    }
  },

  getButtonClass: function (type) {
    return classNames({
      'Button': true,
      'Button_filter': true,
      'Button_filter-selected': (type === this.props.filter)
    });
  },

  getButtonProps: function (onClick, type) {
    return {
      className: this.getButtonClass(type),
      onClick: onClick
    };
  },

  renderList: function () {
    let moviesList = this.props.movies.map((movie, index) =>
      <div key={index} className="MovieList--movie">
      <Button {...this.getButtonProps(this.deleteMovie.bind(this, movie.id))} className="Button Button_delete Button_red_delete">Delete</Button>
      <li className="MovieList--movie--items">
        <ListItem label="Name: "data={movie.name} />
        <ListItem label="Year: "data={movie.year} />
        <ListItem label="Duration: "data={movie.duration} />
        {this.watchedLabel(movie.watched)}
      </li>
      <Button {...this.getButtonProps(this.toggleMovie.bind(this, movie.id))} className="Button Button_status">Change watched status</Button>
    </div>
    );

    return (
      <ul className="MovieList--list">{moviesList}</ul>
    )
  },

  toggleMovie: function (field, event) {
    this.props.onToggleMovie(field);
  },

  deleteMovie: function (field, event) {
    this.props.onMovieRemove(field);
  },

  render() {
    var movies = this.props.movies;

    return (
      <div className="MovieList">
        <p className="MovieList--counter">
          You have {movies.length} movies on your list.
        </p>
        <div className="MovieList--showOptions">
          <Button {...this.getButtonProps(this.props.onSetVisibilityFilter.bind(this, SHOW_ALL), SHOW_ALL)}>Show all</Button>
          <Button {...this.getButtonProps(this.props.onSetVisibilityFilter.bind(this, SHOW_WATCHED), SHOW_WATCHED)}>Show watched</Button>
          <Button {...this.getButtonProps(this.props.onSetVisibilityFilter.bind(this, SHOW_NON_WATCHED), SHOW_NON_WATCHED)}>Show not watched</Button>
        </div>
        {this.showList()}
      </div>
    )
  }
});

export default MovieList;
