export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const TOGGLE_MOVIE = 'TOGGLE_MOVIE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie: movie
  }
}

export function removeMovie(id) {
  return {
    type: REMOVE_MOVIE,
    id: id
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WATCHED: 'SHOW_WATCHED',
  SHOW_NON_WATCHED: 'SHOW_NON_WATCHED'
}

export function toggleMovie(id) {
  return {
    type: TOGGLE_MOVIE,
    id: id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
}
