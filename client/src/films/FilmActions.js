import * as FilmConstants from './FilmConstants';

// ========== Sync Actions ==========

export function requestFilms() {
  return {
    type: FilmConstants.REQUEST_FILMS
  }
}

export function receiveFilms(films) {
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

function requestUpdateOne() {
  return {
    type: FilmConstants.REQUEST_UPDATE_FILM
  }
}

function successUpdateOne(film) {
  return {
    type: FilmConstants.SUCCESS_UPDATE_FILM,
    film
  }
}

function errorUpdateOne() {
  return {
    type: FilmConstants.ERROR_UPDATE_FILM
  }
}

function requestCreateOne() {
  return {
    type: FilmConstants.REQUEST_CREATE_FILM
  }
}

function successCreateOne(film) {
  return {
    type: FilmConstants.SUCCESS_CREATE_FILM,
    film
  }
}

function errorCreateOne() {
  return {
    type: FilmConstants.ERROR_CREATE_FILM
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
      .then(json => dispatch(successDeleteOne(filmId)))
      .catch(err => dispatch(errorDeleteOne()))
  }
}

export function updateOne(film) {
  return function (dispatch) {
    dispatch(requestUpdateOne())
    return fetch(`/film/${film.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({film})
    })
      .then(res => res.json())
      .then(json => dispatch(successUpdateOne(film)))
      .catch(err => dispatch(errorUpdateOne()))
  }
}

export function createOne(film) {
  return function (dispatch) {
    dispatch(requestCreateOne())
    return fetch(`/films`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({film})
    })
      .then(res => res.json())
      .then(json => dispatch(successCreateOne(json.film)))
      .catch(err => dispatch(errorCreateOne()))
  }
}