import React from 'react';
import classNames from 'classnames';
import ListItem from './ListItem';
import Button from './Button';
import './MovieList.scss';
import './MovieForm.scss'

const MovieList = React.createClass({

  propTypes: {
    filter: React.PropTypes.string,
    movies: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      year: React.PropTypes.string.isRequired,
      duration: React.PropTypes.string.isRequired,
      watched: React.PropTypes.bool.isRequired
    }).isRequired).isRequired
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
    console.log(type, this.props.filter)
      return classNames({
        'Button': true,
        'Button--MovieList_filter': true,
        'Button--MovieList_filter-selected': (type === this.props.filter)
      });
  },

  getButtonProps: function (onClick, type) {
    return {
      onClick: onClick,
      className: this.getButtonClass(type)
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
    console.log('MOVIES  ',this.props.movies);
  },

  render() {
    var movies = this.props.movies;

    return (
      <div className="MovieList">
        <p className="MovieList--counter">
          You have {movies.length} movies on your list.
        </p>
        <div className="MovieList--showOptions">
          <Button {...this.getButtonProps(this.props.onSetVisibilityFilter.bind(this, 'SHOW_ALL'), 'SHOW_ALL')}>Show all</Button>
          <Button {...this.getButtonProps(this.props.onSetVisibilityFilter.bind(this, 'SHOW_WATCHED'), 'SHOW_WATCHED')}>Show watched</Button>
          <Button {...this.getButtonProps(this.props.onSetVisibilityFilter.bind(this, 'SHOW_NON_WATCHED'), 'SHOW_NON_WATCHED')}>Show not watched</Button>
        </div>
        {this.showList()}
      </div>
    )
  }
});

export default MovieList;
