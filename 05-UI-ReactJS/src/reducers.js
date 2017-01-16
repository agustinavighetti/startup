import { combineReducers } from 'redux';
import { VisibilityFilters } from './actions';
import { ADD_MOVIE, REMOVE_MOVIE, TOGGLE_MOVIE, SET_VISIBILITY_FILTER } from './actions';

const { SHOW_ALL } = VisibilityFilters;

function movies(state = JSON.parse(localStorage.getItem('movies')), action) {

  switch (action.type) {
    case ADD_MOVIE:
      return [
          ...state,
          action.movie
      ]

      case REMOVE_MOVIE:
        let newMovies = [];

        state.map((movie, index) => {
            if (index !== action.index) {
              return newMovies.push(movie)
            }
        });

        return newMovies;

      case TOGGLE_MOVIE:
        let moviesChanged = [];

        state.map((movie, index) => {
            if (index === action.index) {
              movie.watched = !movie.watched;
              return moviesChanged.push(movie)
            }
            return moviesChanged.push(movie)
          });
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
  visibilityFilter,
  movies
});

export default moviesApp;
