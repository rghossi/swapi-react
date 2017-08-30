import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './FilmItem.css'

class FilmItem extends React.Component {
  constructor() {
    super()
    this.state = {
      editMode: false
    }
  }

  render() {
    const { id, title, episodeId, openingCrawl, onClick } = this.props
    const wrapper = classNames({"flip-container": true, "film-item-wrapper": true, "flip": this.state.editMode})
    return (
      <div className={wrapper}>
        <div className="flipper">
          <div className="front film-item-show-mode" onClick={() => this.setState({editMode: true})}>
            <h3>{title}</h3>
            <h4>Episode {episodeId}</h4>
            {openingCrawl}
          </div>
          <div className="back film-item-edit-mode">
            <form>
              <input value={title} type="text"></input>
              <input value={episodeId} type="number"></input>
              <textarea value={openingCrawl} type="text"></textarea>
              <button type="button" className="submit-btn">Submit</button>
              <button type="button" className="cancel-btn" onClick={() => this.setState({editMode: false})}>Cancel</button>
              <button type="button" className="delete-btn">Delete</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

FilmItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  episodeId: PropTypes.number.isRequired,
  openingCrawl: PropTypes.string.isRequired
}

export default FilmItem