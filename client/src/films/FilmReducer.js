import * as FilmConstants from './FilmConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case FilmConstants.REQUEST_FILMS:
      return {...state, isFetching: true}
    case FilmConstants.RECEIVE_FILMS:
      return {...state, isFetching: false, films: action.films}
    case FilmConstants.ERROR_FILMS:
      return {...state, isFetching: false, didInvalidate: true}
    default:
      return state;
  }
}