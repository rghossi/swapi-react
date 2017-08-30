import React from 'react'
import PropTypes from 'prop-types'

const FilmItem = ({ id, title, episodeId, openingCrawl, onClick }) => (
  <div className="film-item" onClick={onClick}>
    <h3>{title}</h3>
    <h4>Episode {episodeId}</h4>
    {openingCrawl}
  </div>
)

FilmItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  episodeId: PropTypes.number.isRequired,
  openingCrawl: PropTypes.string.isRequired
}

export default FilmItem