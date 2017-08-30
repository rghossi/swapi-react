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

function requestDeleteOne() {
  return {
    type: FilmConstants.REQUEST_DELETE_FILM
  }
}

function successDeleteOne(filmId) {
  return {
    type: FilmConstants.SUCCESS_DELETE_FILM,
    filmId
  }
}

function errorDeleteOne() {
  return {
    type: FilmConstants.ERROR_DELETE_FILM
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

export function deleteOne(filmId) {
  return function (dispatch) {
    dispatch(requestDeleteOne())
    return fetch(`/film/${filmId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(films => dispatch(successDeleteOne(filmId)))
      .catch(err => dispatch(errorDeleteOne()))
  }
}