import React from 'react'
import PropTypes from 'prop-types'
import FilmItem from './FilmItem'

const FilmList = ({ films, onFilmClick }) => (
  <div>
    <h4>Click on any card to edit it!</h4>
    <ul>
      {films.map(film => (
        <FilmItem key={film.id} {...film} onClick={() => onFilmClick(film.id)} />
      ))}
    </ul>
  </div>
)

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      episodeId: PropTypes.number.isRequired,
      openingCrawl: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onFilmClick: PropTypes.func.isRequired
}

export default FilmList