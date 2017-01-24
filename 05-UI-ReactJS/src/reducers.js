import { ADD_MOVIE, REMOVE_MOVIE, TOGGLE_MOVIE, SET_VISIBILITY_FILTER } from './actions';
import { combineReducers } from 'redux';
import { VisibilityFilters } from './filters';

const { SHOW_ALL } = VisibilityFilters;

function movies(state = JSON.parse(localStorage.getItem('movies')) || [], action) {

  switch (action.type) {
    case ADD_MOVIE:
      let movieAdded = [
        ...state,
        action.movie
      ]

      localStorage.setItem('movies', JSON.stringify(movieAdded));
      return movieAdded;

      case REMOVE_MOVIE:
        let newMovies = [];

        state.map((movie, id) => {
            if (movie.id !== action.id) {
              return newMovies.push(movie)
            }
        });
        localStorage.setItem('movies', JSON.stringify(newMovies))
        return newMovies;

      case TOGGLE_MOVIE:
        let moviesChanged = [];

        state.map((movie, id) => {
            if (movie.id === action.id) {
              movie.watched = !movie.watched;
              return moviesChanged.push(movie)
            }
            return moviesChanged.push(movie)
          });
          localStorage.setItem('movies', JSON.stringify(moviesChanged))
          return moviesChanged;

      default:
          return state
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const moviesApp = combineReducers({
  movies,
  visibilityFilter
});

export default moviesApp;
