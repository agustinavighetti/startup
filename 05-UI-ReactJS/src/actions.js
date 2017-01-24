export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_MOVIE = 'TOGGLE_MOVIE';

export function addMovie(movie) {
  return {
    movie: movie,
    type: ADD_MOVIE
  }
}

export function removeMovie(id) {
  return {
    id: id,
    type: REMOVE_MOVIE
  }
}

export function toggleMovie(id) {
  return {
    id: id,
    type: TOGGLE_MOVIE
  }
}

export function setVisibilityFilter(filter) {
  return {
    filter: filter,
    type: SET_VISIBILITY_FILTER
  }
}
