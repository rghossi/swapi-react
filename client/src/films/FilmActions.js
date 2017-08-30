import * as FilmConstants from './FilmConstants';

// ========== Sync Actions ==========

function requestFilms() {
  return {
    type: FilmConstants.REQUEST_FILMS
  }
}

function receiveFilms(films) {
  return {
    type: FilmConstants.RECEIVE_FILMS,
    films
  }
}

function errorFilms(films) {
  return {
    type: FilmConstants.ERROR_FILMS
  }
}

// ========== Async Actions ==========

export function fetchAll() {
  return function (dispatch) {
    dispatch(requestFilms())
    return fetch('/films')
      .then(res => res.json())
      .then(films => dispatch(receiveFilms(films)))
      .catch(err => dispatch(errorFilms()))
  }
}