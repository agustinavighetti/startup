import React from 'react';
import classNames from 'classnames';
import ListItem from './ListItem';

const MovieList = React.createClass({

  propTypes: {
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
        <div className="option-box option-box-noMovie">
          <h1>No hay pelis</h1>
        </div>
      );
    }
  },

  watchedLabel: function(watched) {
    if (watched) {
      return <label className="ListItem-label">You have already watched this movie</label>
    } else {
      return <label className="ListItem-label">You have not watched this movie yet</label>
    }
  },

  renderList: function () {
    let moviesList = this.props.movies.map((movie, index) =>
      <div key={index} className="ListMovie">
        <button className="App-button App-button--delete" type="button" onClick={this.deleteMovie.bind(this, index)}>
          Delete
        </button>
        <li className="ListMovie-items">
          <ListItem label="Name: "data={movie.name} />
          <ListItem label="Year: "data={movie.year} />
          <ListItem label="Duration: "data={movie.duration} />
          {this.watchedLabel(movie.watched)}
        </li>
        <button onClick={this.toggleMovie.bind(this, index)}>
          Change watched status
        </button>
      </div>
    );

    return (
      <ul>{moviesList}</ul>
    )

  },
// al cambiar el status de la movie con index en field, cuando cambias el index 0 en SHOW_WATCHED cambia la movie 0 en SHOW_ALL
  toggleMovie: function (field, event) {
    this.props.onToggleMovie(field);
    console.log(field);

    localStorage.setItem('movies', JSON.stringify(this.props.movies))
  },

  deleteMovie: function (field, event) {
    this.props.onMovieRemove(field);

    localStorage.setItem('movies', JSON.stringify(this.props.movies))
  },

  render() {
    var movies = this.props.movies;

    return (
      <div className="option-box">
        <p className="MovieList-counter">
          You have {movies.length} movies on your list.
        </p>
        <button className={this.getButtonClass} onClick={this.props.onSetVisibilityFilter.bind(this, 'SHOW_ALL')}>
          Show all
        </button>
        <button className={this.getButtonClass} onClick={this.props.onSetVisibilityFilter.bind(this, 'SHOW_WATCHED')}>
          Show watched
        </button>
        <button className={this.getButtonClass} onClick={this.props.onSetVisibilityFilter.bind(this, 'SHOW_NON_WATCHED')}>
          Show not watched
        </button>
        {this.showList()}
      </div>
    )
  },

  getButtonClass: function () {
    return classNames(
      'App-button--select'
    );

  }
});

export default MovieList;
