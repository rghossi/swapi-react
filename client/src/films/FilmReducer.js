import * as FilmConstants from './FilmConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case FilmConstants.REQUEST_FILMS:
      return {...state, isFetching: true}
    case FilmConstants.RECEIVE_FILMS:
      return {...state, isFetching: false, filmList: action.films}
    case FilmConstants.ERROR_FILMS:
      return {...state, isFetching: false, didInvalidate: true}
    case FilmConstants.REQUEST_DELETE_FILM:
      return {...state, isDeleting: true}
    case FilmConstants.SUCCESS_DELETE_FILM:
      const updatedFilmList = state.filmList.filter((film) => film.id !== action.filmId)
      return {...state, isDeleting: false, filmList: updatedFilmList}
    case FilmConstants.ERROR_DELETE_FILM:
      return {...state, isDeleting: false, didInvalidate: true}
    case FilmConstants.REQUEST_UPDATE_FILM:
      return {...state, isUpdating: true}
    case FilmConstants.SUCCESS_UPDATE_FILM:
      const oldFilm = state.filmList.filter((film) => film.id === action.film.id)[0]
      const filmIndex = state.filmList.indexOf(oldFilm)
      const newFilmList = state.filmList.slice(0)
      newFilmList[filmIndex] = action.film
      return {...state, isUpdating: false, filmList: newFilmList}
    case FilmConstants.ERROR_UPDATE_FILM:
      return {...state, isUpdating: false, didInvalidate: true}
    default:
      return state;
  }
}