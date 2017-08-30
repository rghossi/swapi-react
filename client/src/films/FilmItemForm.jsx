import React from 'react'
import PropTypes from 'prop-types'

const FilmItemForm = ({ film, onSubmitClick, onCancelClick, onDeleteClick, handleChange }) => (
  <form>
    <input value={film.title} name="title" type="text" onChange={handleChange}></input>
    <input value={film.episodeId} name="episodeId" type="number" onChange={handleChange}></input>
    <textarea value={film.openingCrawl} name="openingCrawl" type="text" onChange={handleChange}></textarea>
    <button type="button" className="submit-btn" onClick={onSubmitClick}>Submit</button>
    <button type="button" className="cancel-btn" onClick={onCancelClick}>Cancel</button>
    <button type="button" className="delete-btn" onClick={onDeleteClick}>Delete</button>
  </form>
)

FilmItemForm.propTypes = {

}

export default FilmItemForm