import React from 'react';

const MovieList = React.createClass({

  // getInitialState: function() {
  //   return {
  //     movies: JSON.parse(localStorage.getItem('movies'))
  //   }
  // },

  showList: function() {
    var moviesObject = JSON.parse(localStorage.getItem('movies')) || [];

    console.log(moviesObject.length);
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
          <div>
            {this.returnItem()}
          </div>
        </div>
      );
    } else {
      return (<h1>No hay pelis</h1>);
    }
  },

  returnItem: function() {
    var movies = JSON.parse(localStorage.getItem('movies'));
    console.log('hola');
    console.log(movies, typeof movies);

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
