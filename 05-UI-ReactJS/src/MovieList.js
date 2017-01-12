import React from 'react';
import ListItem from './ListItem';

const MovieList = React.createClass({

  showList: function () {
    var moviesObject = JSON.parse(localStorage.getItem('movies')) || [];

    if (moviesObject.length !== 0) {
      return (
        <div className="option-box">
          <div>
            <p className="MovieList-counter">
              You have {moviesObject.length} movies on your list.
            </p>
            <p className="MovieList-selected">
              You have {moviesObject.length} movies on your list.
            </p>
          </div>
          {this.renderList()}
        </div>
      );
    } else {
      return (
        <div className="option-box">
          <h1>No hay pelis</h1>
        </div>
      );
    }
  },

  renderList: function () {
    let movies = JSON.parse(localStorage.getItem('movies'));

    let moviesList = movies.map((movie, index) =>
      <div key={index} className="ListMovie">
        <button className="App-button App-button--delete" type="button" onClick={this.deleteMovie.bind(this, index)}>
          Delete
        </button>
        <li className="ListMovie-items">
          <ListItem label="Name: "data={movie.name} />
          <ListItem label="Year: "data={movie.year} />
          <ListItem label="Duration: "data={movie.duration} />
        </li>
      </div>
    );

    return (
      <ul>{moviesList}</ul>
    )

  },

  deleteMovie: function (field, event) {
    let movies = JSON.parse(localStorage.getItem('movies'));
    // console.log(field);
    movies.splice(field,1);
    localStorage.setItem('movies', JSON.stringify(movies))
  },

  render() {
    return (
      <div>
        {this.showList()}
      </div>
    )
  }
});

export default MovieList;
