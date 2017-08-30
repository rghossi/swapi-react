import React from 'react'
import PropTypes from 'prop-types'

const FilmItemForm = ({ film, onSubmitClick, onCancelClick, onDeleteClick, onResetClick, handleChange }) => (
  <form>
    <input placeholder='Title' value={film.title} name="title" type="text" onChange={handleChange}></input>
    <input placeholder='Episode Number' value={film.episodeId} name="episodeId" type="number" onChange={handleChange}></input>
    <textarea placeholder='Opening crawl' value={film.openingCrawl} name="openingCrawl" type="text" onChange={handleChange}></textarea>
    <button type="button" className="submit-btn" onClick={onSubmitClick}>Submit</button>
    { onCancelClick && <button type="button" className="cancel-btn" onClick={onCancelClick}>Cancel</button>}
    { onDeleteClick && <button type="button" className="delete-btn" onClick={onDeleteClick}>Delete</button>}
    { onResetClick && <button type="button" className="delete-btn" onClick={onResetClick}>Reset</button>}
  </form>
)

FilmItemForm.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    episodeId: PropTypes.number.isRequired,
    openingCrawl: PropTypes.string.isRequired
  }).isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func,
  onResetClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  handleChange: PropTypes.func.isRequired
}

export default FilmItemForm